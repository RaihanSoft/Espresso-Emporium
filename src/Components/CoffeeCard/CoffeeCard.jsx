import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, setCoffees, coffees }) => {
    const { photo, name, _id, details } = coffee

    const handleDelete = (id) => {
        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            }

                            );
                            const remaning = coffees.filter(cof => cof._id !== _id)
                            setCoffees(remaning)


                        }
                    })

            }
        });

    }



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
                    <Link to={`updateCoffee/${_id}`}><button className="btn" >Edit</button></Link>
                    <button onClick={() => handleDelete(_id)} className="btn" >Delete</button>
                </div>
            </div>
        </div>
    )
}

export default CoffeeCard
