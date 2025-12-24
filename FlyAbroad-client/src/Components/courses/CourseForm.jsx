import React, { useState } from 'react';

const CourseForm = ({ onSubmit, initialCourse }) => {
  const [title, setTitle] = useState(initialCourse?.title || '');
  const [description, setDescription] = useState(initialCourse?.description || '');
  const [duration, setDuration] = useState(initialCourse?.duration || '');
  const [price, setPrice] = useState(initialCourse?.price?.toString() || '');

  const handleSubmit = (e) => {
    e.preventDefault();

    const course = {
      id: initialCourse?.id,
      title,
      description,
      duration: duration || undefined,
      price: price ? parseFloat(price) : undefined,
    };

    onSubmit(course);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mt-5 space-y-4">
      <div>
        <label className="block font-medium">Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full border p-2 rounded"
        />
      </div>

      <div>
        <label className="block font-medium">Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="w-full border p-2 rounded"
        />
      </div>

      <div>
        <label className="block font-medium">Duration:</label>
        <input
          type="text"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          className="w-full border p-2 rounded"
        />
      </div>

      <div>
        <label className="block font-medium">Price:</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full border p-2 rounded"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        {initialCourse ? 'Update Course' : 'Add Course'}
      </button>
    </form>
  );
};

export default CourseForm;
