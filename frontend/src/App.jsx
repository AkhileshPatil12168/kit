import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Footer from "./Footer";

function App() {
  const [students, setStudents] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    phone: "",
    college: "",
  });
  const [editId, setEditId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const API_URL = `${import.meta.env.VITE_BACKEND_URL}/students`;

  const fetchStudents = async () => {
    try {
      const response = await axios.get(API_URL);
      setStudents(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editId) {
      await axios.put(`${API_URL}/${editId}`, formData);
      setEditId(null);
    } else {
      await axios.post(API_URL, formData);
    }
    setFormData({ name: "", age: "", phone: "", college: "" });
    fetchStudents();
  };

  const deleteStudent = async (id) => {
    if (window.confirm("Delete this student?")) {
      await axios.delete(`${API_URL}/${id}`);
      fetchStudents();
    }
  };

  const filteredStudents = students?.filter((s) =>
    s.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />

      <div className="max-w-6xl mx-auto p-6">
        {/* Form Card */}
        <div className="bg-white p-8 rounded-xl shadow-md mb-10">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            {editId ? "📝 Edit Student" : "👤 Register Student"}
          </h2>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-4 gap-4"
          >
            <input
              className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Name"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <input
              className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              type="number"
              placeholder="Age"
              required
              value={formData.age}
              onChange={(e) =>
                setFormData({ ...formData, age: e.target.value })
              }
            />
            <input
              className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Phone"
              required
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
            <input
              className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="College"
              required
              value={formData.college}
              onChange={(e) =>
                setFormData({ ...formData, college: e.target.value })
              }
            />
            <div className="md:col-span-4 flex gap-2">
              <button
                type="submit"
                className={`px-6 py-3 rounded-lg text-white font-semibold transition ${editId ? "bg-orange-500 hover:bg-orange-600" : "bg-blue-600 hover:bg-blue-700"}`}
              >
                {editId ? "Update Record" : "Add Student"}
              </button>
              {editId && (
                <button
                  onClick={() => {
                    setEditId(null);
                    setFormData({ name: "", age: "", phone: "", college: "" });
                  }}
                  className="bg-gray-200 px-6 py-3 rounded-lg hover:bg-gray-300"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Search & List */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-6 border-b flex justify-between items-center bg-gray-50">
            <h3 className="text-xl font-bold text-gray-700">
              Student Directory
            </h3>
            <input
              type="text"
              placeholder="Search by name..."
              className="border p-2 rounded-md w-64"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <table className="w-full text-left">
            <thead className="bg-gray-100 uppercase text-xs font-semibold text-gray-600">
              <tr>
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4">Age</th>
                <th className="px-6 py-4">Phone</th>
                <th className="px-6 py-4">College</th>
                <th className="px-6 py-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {filteredStudents?.map((s) => (
                <tr key={s._id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4 font-medium">{s.name}</td>
                  <td className="px-6 py-4 text-gray-600">{s.age}</td>
                  <td className="px-6 py-4 text-gray-600">{s.phone}</td>
                  <td className="px-6 py-4 text-gray-600">{s.college}</td>
                  <td className="px-6 py-4 text-center">
                    <button
                      onClick={() => {
                        setEditId(s._id);
                        setFormData(s);
                      }}
                      className="text-blue-600 hover:underline mr-4 font-semibold"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteStudent(s._id)}
                      className="text-red-500 hover:underline font-semibold"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
