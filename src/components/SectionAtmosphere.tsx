type SectionAtmosphereProps = {
  image: string;
  wash?: 'sky' | 'mint' | 'lavender' | 'peach';
};

const SectionAtmosphere = ({ image, wash = 'sky' }: SectionAtmosphereProps) => {
  return (
    <div className="section-atmosphere" aria-hidden>
      <div
        className="section-atmosphere-photo"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className={`section-wash wash-${wash}`} />
    </div>
  );
};

export default SectionAtmosphere;
