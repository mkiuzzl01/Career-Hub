const Section = ({headeing,Peragraph}) => {
    return (
        <div className="text-center">
            <h1 className="text-4xl font-semibold">{headeing}</h1>
            <p>{Peragraph}</p>
        </div>
    );
};

export default Section;