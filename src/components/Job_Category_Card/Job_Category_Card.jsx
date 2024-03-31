
const Job_Category_Card = ({job}) => {
    const {logo,category_name,availability} = job;

    return (
        <div className="flex">
           <div className="bg-slate-100 p-4 rounded-lg">
           <div className="">
           <img src={logo} alt={category_name} className="w-auto"/>
           </div>
            <h3 className="font-bold text-xl">{category_name}</h3>
            <p>{availability}</p>
           </div>
        </div>
    );
};

export default Job_Category_Card;