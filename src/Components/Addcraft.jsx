const Addcraft = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const item = form.itemname.value;
    const email = form.email.value;
    const subcategory = form.subcategory.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const change = form.change.value;
    const processing = form.processing.value;
    const stock = form.stock.value;
    const image = form.image.value;
    const description = form.description.value;

    // Validate form data
    if (!name || !item || !email || !price || !rating) {
      alert("Please fill in all required fields (Name, Item Name, Email, Price, Rating).");
      return;
    }

    const USER = {
      name,
      item,
      email,
      subcategory,
      price,
      rating,
      change,
      processing,
      stock,
      image,
      description,
    };

    console.log("Form Data:", USER)

    fetch("http://localhost:5000/user", { // Corrected URL
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(USER),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("Server Response:", data);
        alert("Craft added successfully!");
        form.reset(); // Reset the form after successful submission
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Failed to add craft. Please try again.");
      });
  };

  return (
    <div>
      <section className="p-6 bg-red-400-800 dark:bg-gray-100 text-green-500 dark:text-blue-500">
        <form
          onSubmit={handleSubmit}
          noValidate=""
          className="container flex flex-col mx-auto space-y-12"
        >
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-900 dark:bg-gray-50">
            <div className="space-y-2 col-span-full lg:col-span-1">
              <p className="font-medium">Make a beautiful Choice</p>
              <p className="text-xs">
                You can make an order and explore the art and craft section.
              </p>
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              {/* Input Fields */}
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="name" className="text-sm">Name</label>
                <input id="name" name="name" type="text" placeholder="Your name" className="w-full rounded-md" />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="itemname" className="text-sm">Item Name</label>
                <input id="itemname" name="itemname" type="text" placeholder="Item Name" className="w-full rounded-md" />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="email" className="text-sm">Email</label>
                <input id="email" name="email" type="email" placeholder="Email" className="w-full rounded-md" />
              </div>
              <div className="col-span-full">
                <label htmlFor="subcategory" className="text-sm">Subcategory</label>
                <input id="subcategory" name="subcategory" type="text" placeholder="" className="w-full rounded-md" />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="price" className="text-sm">Price</label>
                <input id="price" name="price" type="number" placeholder="" className="w-full rounded-md" />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="rating" className="text-sm">Rating</label>
                <input id="rating" name="rating" type="number" step="0.1" placeholder="" className="w-full rounded-md" />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="change" className="text-sm">Change Possible</label>
                <input id="change" name="change" type="text" placeholder="" className="w-full rounded-md" />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="processing" className="text-sm">Processing Time</label>
                <input id="processing" name="processing" type="text" placeholder="" className="w-full rounded-md" />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="stock" className="text-sm">Stock</label>
                <input id="stock" name="stock" type="number" placeholder="" className="w-full rounded-md" />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="image" className="text-sm">Image URL</label>
                <input id="image" name="image" type="text" placeholder="" className="w-full rounded-md" />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="description" className="text-sm">Short Description</label>
                <input id="description" name="description" type="text" placeholder="" className="w-full rounded-md" />
              </div>
              {/* Submit Button */}
              <div className="col-span-full">
                <button type="submit" className="btn btn-success">Add Craft</button>
              </div>
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default Addcraft;
