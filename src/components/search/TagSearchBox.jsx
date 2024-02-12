import React, { useState, useEffect, useRef } from "react";
import tagsData from "../../../TAGS.json";
import Pill from "./Pill";

function TagSearchBox() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedTagsSet, setSelectedTagsSet] = useState(new Set());
  const inputRef = useRef(null);

  const handleSelect = (tag) => {
    setSelectedTags([...selectedTags, tag]);
    setSelectedTagsSet(new Set([...selectedTagsSet, tag]));
    setSearchTerm("");
    console.log(selectedTags)
    inputRef.current.focus()
  };

  const handleRemoveTag = (tag) => {
    const updatedtags = selectedTags.filter(
      (selectedTag) => selectedTag !== tag
    );
    setSelectedTags(updatedtags);

    const updatedTagsSet = new Set(selectedTagsSet);
    updatedTagsSet.delete(tag);
    setSelectedTagsSet(updatedTagsSet);
  };


  return (
    <div className="flex justify-center items-center w-full relative">
      <div className="flex flex-wrap  justify-center items-center w-full gap-2 p-2 border borfer-gray-200 rounded-md  ">
        {selectedTags.map((item) => {
          return (
            <Pill
              key={item}
              title={item}
              onClick={() => handleRemoveTag(item)}
            />
          );
        })}
        <div>
          <input
            className="border-none focus:ring-0 p-4 h-6 "
            ref={inputRef}
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search For a Tag..."
          />

          <ul className="max-h-80 list-none overflow-y-scroll z-40 bg-white absolute p-0 m-0  border-solid border-2 ">
            {tagsData.tags
              .filter((item) => {
                const value = searchTerm.toLowerCase();
                const tagName = item.toLowerCase();

                return value && tagName.startsWith(value) && tagName !== value;
              })
              .map((item) =>
                !selectedTagsSet.has(item) ? (
                  <li
                    key={item}
                    onClick={() => handleSelect(item)}
                    className="flex text-center item-center gap-2 cursor-pointer p-2 hover:bg-slate-200 "
                  >
                    {item}
                  </li>
                ) : null
              )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TagSearchBox;
