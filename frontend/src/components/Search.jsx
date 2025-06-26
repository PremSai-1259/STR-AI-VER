import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, X } from "lucide-react";

const topics = [
  "Arrays",
  "Vectors",
  "Deques",
  "List",
  "Stack",
  "Queues",
  "Sets",
  "Maps",
  "Algorithms"
];

export default function PracticeTopicGrid() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const filteredTopics = topics.filter((topic) =>
    topic.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleClick = (topic) => {
    navigate(`/practice/${topic.toLowerCase()}`);
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold text-[#38bdf8]">TOPICS</h1>
        <p className="text-gray-400">Read the problem twice, code once</p>
      </div>

      <div className="relative max-w-md mx-auto">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          type="text"
          placeholder="Search topic..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 pr-10 w-full py-3 rounded bg-gray-800 text-white border border-gray-600"
        />
        {searchTerm && (
          <button
            onClick={() => setSearchTerm("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
          >
            <X />
          </button>
        )}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredTopics.map((topic, i) => (
          <div
            key={i}
            onClick={() => handleClick(topic)}
            className="bg-gray-700 text-center p-4 rounded-lg hover:bg-gray-600 transition cursor-pointer"
          >
            <h2 className="text-lg font-semibold text-blue-300">{topic}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
