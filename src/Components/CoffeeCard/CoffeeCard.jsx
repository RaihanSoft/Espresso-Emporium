// eslint-disable-next-line react/prop-types
const CoffeeCard = ({ coffee }) => {
    // eslint-disable-next-line react/prop-types
    const { photo, name, _id, details } = coffee
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                    src={photo}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {details}
                    <div className="badge badge-secondary">{name}</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline"> id {_id}</div>
                    <div className="badge badge-outline">Products</div>
                </div>

                <div>
                    <button className="btn" >view</button>
                    <button className="btn" >Edit</button>
                    <button className="btn" >Delete</button>
                </div>
            </div>
        </div>
    )
}

export default CoffeeCard
