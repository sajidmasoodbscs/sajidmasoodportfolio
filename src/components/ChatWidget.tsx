import { useEffect, useRef, useState, type FormEvent } from "react";
import { Bot, CheckCircle2, Mail, Send, UserRound, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { answerFromProfile } from "@/lib/sajidProfile";

type Mode = "ask" | "email";
type ChatMessage = { role: "bot" | "user"; text: string };

const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<Mode>("ask");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "bot",
      text: "Hi — ask about Sajid’s skills, work, or projects. Or open Email to send him a message.",
    },
  ]);
  const [draft, setDraft] = useState("");
  const [asking, setAsking] = useState(false);
  const [emailForm, setEmailForm] = useState({ name: "", email: "", message: "" });
  const [emailError, setEmailError] = useState("");
  const [emailThanks, setEmailThanks] = useState(false);
  const [sendingEmail, setSendingEmail] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open, mode]);

  const ask = (preset?: string) => {
    const text = (preset ?? draft).trim();
    if (!text || asking) return;
    setDraft("");
    setMessages((prev) => [...prev, { role: "user", text }]);
    setAsking(true);
    window.setTimeout(() => {
      setMessages((prev) => [...prev, { role: "bot", text: answerFromProfile(text) }]);
      setAsking(false);
    }, 250);
  };

  const sendEmail = async (event: FormEvent) => {
    event.preventDefault();
    setSendingEmail(true);
    setEmailError("");

    const payload = {
      name: emailForm.name.trim(),
      email: emailForm.email.trim(),
      subject: "Website chat inquiry",
      message: emailForm.message.trim(),
    };

    try {
      const local = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (local.ok) {
        setEmailThanks(true);
        setEmailForm({ name: "", email: "", message: "" });
        return;
      }

      const remote = await fetch("https://formsubmit.co/ajax/sajidmasood351@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: payload.name,
          email: payload.email,
          message: payload.message,
          _subject: "Website chat inquiry",
        }),
      });

      if (!remote.ok) {
        throw new Error("Could not send email. Try again in a moment.");
      }

      setEmailThanks(true);
      setEmailForm({ name: "", email: "", message: "" });
    } catch (error) {
      setEmailError(error instanceof Error ? error.message : "Could not send email.");
    } finally {
      setSendingEmail(false);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-[60]">
      {open ? (
        <div className="mb-3 w-[min(100vw-2rem,380px)] overflow-hidden rounded-2xl border border-border bg-white shadow-elegant">
          <div className="flex items-center justify-between bg-primary px-4 py-3 text-primary-foreground">
            <div>
              <p className="text-sm font-semibold">Chat with Sajid’s assistant</p>
              <p className="text-xs opacity-80">Ask about him, or email him</p>
            </div>
            <button
              type="button"
              className="rounded-md p-1 hover:bg-white/15"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="flex gap-2 border-b border-border p-2">
            <Button
              type="button"
              size="sm"
              variant={mode === "ask" ? "default" : "outline"}
              className="flex-1"
              onClick={() => setMode("ask")}
            >
              <UserRound className="mr-1 h-4 w-4" />
              About Sajid
            </Button>
            <Button
              type="button"
              size="sm"
              variant={mode === "email" ? "default" : "outline"}
              className="flex-1"
              onClick={() => {
                setMode("email");
                setEmailThanks(false);
                setEmailError("");
              }}
            >
              <Mail className="mr-1 h-4 w-4" />
              Email
            </Button>
          </div>

          {mode === "email" ? (
            emailThanks ? (
              <div className="space-y-3 p-6 text-center">
                <CheckCircle2 className="mx-auto h-12 w-12 text-accent" />
                <h3 className="text-lg font-semibold">Thank you</h3>
                <p className="text-sm text-muted-foreground">
                  Your message was sent. Sajid will get back to you soon.
                </p>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setEmailThanks(false)}
                >
                  Send another message
                </Button>
              </div>
            ) : (
              <form className="space-y-3 p-4" onSubmit={sendEmail}>
                <input
                  required
                  name="name"
                  placeholder="Your name"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
                  value={emailForm.name}
                  onChange={(event) => setEmailForm((prev) => ({ ...prev, name: event.target.value }))}
                />
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="Your email"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
                  value={emailForm.email}
                  onChange={(event) => setEmailForm((prev) => ({ ...prev, email: event.target.value }))}
                />
                <textarea
                  required
                  name="message"
                  rows={4}
                  placeholder="Your message"
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  value={emailForm.message}
                  onChange={(event) => setEmailForm((prev) => ({ ...prev, message: event.target.value }))}
                />
                {emailError ? <p className="text-sm text-destructive">{emailError}</p> : null}
                <Button type="submit" className="w-full" disabled={sendingEmail}>
                  {sendingEmail ? "Sending..." : "Send email"}
                </Button>
              </form>
            )
          ) : (
            <>
              <div ref={listRef} className="h-72 space-y-3 overflow-y-auto bg-slate-50 p-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`max-w-[90%] rounded-xl px-3 py-2 text-sm ${
                      message.role === "user"
                        ? "ml-auto bg-primary text-primary-foreground"
                        : "bg-white text-foreground shadow-sm"
                    }`}
                  >
                    {message.text}
                  </div>
                ))}
                {asking ? <p className="text-xs text-muted-foreground">Thinking…</p> : null}
                <div className="flex flex-wrap gap-2">
                  {["Skills?", "Experience?", "Projects?", "How to contact?"].map((label) => (
                    <button
                      key={label}
                      type="button"
                      className="rounded-full border border-border bg-white px-3 py-1 text-xs hover:border-primary"
                      onClick={() => ask(label)}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>
              <form
                className="flex gap-2 border-t border-border p-3"
                onSubmit={(event) => {
                  event.preventDefault();
                  ask();
                }}
              >
                <Input
                  value={draft}
                  onChange={(event) => setDraft(event.target.value)}
                  placeholder="Ask about skills, projects, experience…"
                />
                <Button type="submit" size="icon" disabled={asking} aria-label="Send question">
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </>
          )}
        </div>
      ) : null}

      <Button
        type="button"
        className="h-14 w-14 rounded-full shadow-primary"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Open chat"
      >
        {open ? <X className="h-6 w-6" /> : <Bot className="h-6 w-6" />}
      </Button>
    </div>
  );
};

export default ChatWidget;
