import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, MapPin, Phone, Github, Linkedin } from 'lucide-react';
import { useState, type ChangeEvent, type FormEvent } from 'react';
import { useToast } from '@/hooks/use-toast';
import SectionAtmosphere from '@/components/SectionAtmosphere';
import contactBg from '@/assets/bg-contact.png';

const ContactSection = () => {
  const { toast } = useToast();
  const [sending, setSending] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = event.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setSending(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message.');
      }

      setForm({ name: '', email: '', subject: '', message: '' });
      toast({
        title: 'Message sent',
        description: 'Thanks — I will get back to you soon.',
      });
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Could not send',
        description: error instanceof Error ? error.message : 'Please try again.',
      });
    } finally {
      setSending(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "sajidmasood351@gmail.com",
      link: "mailto:sajidmasood351@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone", 
      content: "+92 305 5860230",
      link: "tel:+923055860230"
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Available Worldwide",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      title: "GitHub",
      link: "https://github.com/sajidmasoodbscs"
    },
    {
      icon: Linkedin,
      title: "LinkedIn", 
      link: "https://www.linkedin.com/in/sajid-masood-380707112"
    }
  ];

  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      <SectionAtmosphere image={contactBg} wash="sky" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="section-header mb-4">Get In Touch</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to bring your ideas to life? Let's discuss your next project
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8 animate-slide-in-left">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  Let's Connect
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  I'm always interested in new opportunities and exciting projects. 
                  Whether you need a full-stack application, Shopify integration, 
                  or cloud-based solution, I'm here to help.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="skill-card">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          <info.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground">
                            {info.title}
                          </h4>
                          {info.link ? (
                            <a 
                              href={info.link}
                              className="text-muted-foreground hover:text-primary transition-smooth"
                            >
                              {info.content}
                            </a>
                          ) : (
                            <p className="text-muted-foreground">
                              {info.content}
                            </p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  Follow Me
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="icon"
                      className="border-primary/30 hover:border-primary hover:bg-primary/10 transition-smooth"
                      asChild
                    >
                      <a
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.title}
                      >
                        <social.icon className="h-5 w-5" />
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="skill-card animate-scale-in">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  Send a Message
                </h3>
                
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground">
                        Name
                      </Label>
                      <Input 
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="bg-background/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground">
                        Email
                      </Label>
                      <Input 
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                        className="bg-background/50"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-foreground">
                      Subject
                    </Label>
                    <Input 
                      id="subject"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="Project inquiry"
                      required
                      className="bg-background/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground">
                      Message
                    </Label>
                    <Textarea 
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      rows={5}
                      required
                      className="bg-background/50"
                    />
                  </div>

                  <Button 
                    type="submit"
                    disabled={sending}
                    className="w-full primary-gradient hover:shadow-primary transition-spring text-lg py-6"
                  >
                    {sending ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;