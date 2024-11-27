import { useLoaderData } from "react-router-dom"
import Swal from "sweetalert2"

const UpdateCoffee = () => {
  const coffee = useLoaderData()
  const { photo, name, _id, details, category, taste, supplier, chef } = coffee


  // const handleUpdate = (e) => {
  //   e.preventDefault()

  //   const form = e.target;
  //   const name = form.name.value
  //   const chef = form.chef.value
  //   const supplier = form.supplier.value
  //   const taste = form.taste.value
  //   const details = form.details.value
  //   const photo = form.photo.value
  //   const category = form.category.value

  //   const UpdateCoffee = { category, name, chef, supplier, taste, details, photo }

  //   //send data to the server
  //   fetch(`http://localhost:5000/coffee/${_id}`, {
  //     method: 'PUT',
  //     headers: {
  //       'content-type': 'application/json'
  //     },
  //     body: JSON.stringify(UpdateCoffee)
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log(data);
  //       if (data.modifiedCount > 0) {
  //         Swal.fire({
  //           position: "center",
  //           icon: "success",
  //           title: "Coffee update successfully",
  //           showConfirmButton: false,
  //           timer: 1500
  //         });
  //       }
  //     })




  // }

  const handleUpdate = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const category = form.category.value;

    const updateCoffee = { category, name, chef, supplier, taste, details, photo };

    // Send data to the server
    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateCoffee),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`); // <-- Error handling
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Coffee updated successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            position: "center",
            icon: "info",
            title: "No changes made to the coffee",
            showConfirmButton: true,
          });
        }
      })
      .catch((error) => {
        console.error("Error updating coffee:", error); // <-- Error logging
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Failed to update coffee",
          text: error.message,
          showConfirmButton: true,
        });
      });
  };


  return (
    <div className="max-w-3xl mx-auto bg-gray-100 p-8 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Update Coffee {name}</h2>
      <p className="text-center text-gray-600 mb-8">
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using content here.
      </p>
      <form onSubmit={handleUpdate} >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              defaultValue={name}
              placeholder="Enter coffee name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Chef</label>
            <input
              type="text"
              name="chef"
              defaultValue={chef}
              placeholder="Enter coffee chef"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Supplier</label>
            <input
              type="text"
              name="supplier"
              defaultValue={supplier}

              placeholder="Enter coffee supplier"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Taste</label>
            <input
              type="text"
              name="taste"
              defaultValue={taste}

              placeholder="Enter coffee taste"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Category</label>
            <input
              type="text"
              name="category"
              defaultValue={category}

              placeholder="Enter coffee category"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>


          <div>
            <label className="block text-gray-700 font-medium mb-2">Details</label>
            <input
              type="text"
              name="details"
              defaultValue={details}

              placeholder="Enter coffee details"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>


          <div className="md:col-span-2">
            <label className="block text-gray-700 font-medium mb-2">  defaultValue={taste}</label>
            <input
              type="text"
              name="photo"
              defaultValue={photo}

              placeholder="Enter photo URL"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

        </div>
        <div className="mt-8">
          <button
            type="submit"
            className="w-full bg-amber-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500"
          >
            Update Coffee
          </button>
        </div>
      </form>
    </div>
  )
}

export default UpdateCoffee
