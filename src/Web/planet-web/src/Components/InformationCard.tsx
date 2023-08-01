type CardProps = {
    children: React.ReactNode;
    style: React.CSSProperties;
  };
  
  const InformationCard = ({ children, ...props }: CardProps) => {
    const {style} = props;
  
    return (
      <div style={style}>
        {children}
      </div>
    );
  };
  
  export default InformationCard;
  