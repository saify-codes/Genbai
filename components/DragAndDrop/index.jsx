import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
// import Stories from "../Backlog/Stories";
import Block from "../Backlog/Block";
import { BiLoaderCircle } from "react-icons/bi";
import { FaRegSquare } from "react-icons/fa6";
import { LuAtom } from "react-icons/lu";
import { FaPlus } from "react-icons/fa6";
import { useTheme } from "@/context/ThemeContext";


// Helper function to generate items
const getItems = (count, offset = 0) =>
  Array.from({ length: count }, (v, k) => k).map(k => ({
    id: `item-${k + offset}`,
    content: `Test ${k + offset}`,
  }));

// Initial boards with items
const initialBoards = [
  {
    id: 'board-1',
    items: getItems(5),
  },
  {
    id: 'board-2',
    items: getItems(5, 5),
  },
];

// Reordering logic for items within the same board or moving between boards
const reorder = (boards, source, destination) => {
  const sourceBoard = boards.find(board => board.id === source.droppableId);
  const destBoard = boards.find(board => board.id === destination.droppableId);
  const sourceItems = [...sourceBoard.items];
  const [removed] = sourceItems.splice(source.index, 1);

  if (source.droppableId === destination.droppableId) {
    // Moving within the same board
    sourceItems.splice(destination.index, 0, removed);
    const newBoards = boards.map(board =>
      board.id === sourceBoard.id ? { ...board, items: sourceItems } : board
    );
    return newBoards;
  } else {
    // Moving between different boards
    const destItems = [...destBoard.items];
    destItems.splice(destination.index, 0, removed);
    const newBoards = boards.map(board =>
      board.id === sourceBoard.id
        ? { ...board, items: sourceItems }
        : board.id === destBoard.id
          ? { ...board, items: destItems }
          : board
    );
    return newBoards;
  }
};

const getItemStyle = (isDragging, draggableStyle) => ({
  userSelect: "none",
  padding: 2 * 8,
  margin: `0 0 8px 0`,
  background: isDragging ? "lightgreen" : "grey",
  ...draggableStyle,
});

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? "lightblue" : "lightgrey",
  padding: 8,
  width: 250,
  margin: '0 8px',
});

function QuoteApp({  }) {
  const [boards, setBoards] = useState(initialBoards);
  const { theme } = useTheme();
  const light = theme === 'light';

  const onDragEnd = result => {
    const { source, destination } = result;
    if (!destination) {
      return;
    }

    const reorderedBoards = reorder(boards, source, destination);
    setBoards(reorderedBoards);
  };

  const user = [
    {
      logo: 'Frontend Redesign',
      title: "Diagram user onboarding",
      date: "Mar 23",
      aim: 2,
      plug: 3,
      sprint: "Sprint 1.1",
      images: ["ProfileIcon.png", "user2.png", "user3.png"]
    },
    {
      logo: 'Frontend Redesign',
      title: "Diagram user onboarding",
      date: "Mar 23",
      aim: 2,
      plug: 3,
      sprint: "Sprint 1.1",
      images: ["ProfileIcon.png", "user2.png", "user3.png"]
    },
    {
      logo: 'Frontend Redesign',
      title: "Diagram user onboarding",
      date: "Mar 23",
      aim: 2,
      plug: 3,
      sprint: "Sprint 1.1",
      images: ["ProfileIcon.png", "user2.png", "user3.png"]
    },
  ];


  return (
    <div className='px-4 flex flex-col'>
      <div className={`w-[340px] rounded-tl-lg rounded-tr-lg ${light ? "bg-[#F2F7FD] text-gray-600" : "bg-[#061123] text-white shadow-[#6B8CC266]"} py-2 text-center`}>
        BACKLOG
      </div>
      <div>
        <div className={`w-[340px] mt-2 rounded-lg ${light ? "bg-[#F2F7FD]" : "bg-[#061123] shadow-[#6B8CC266]"}  h-[620px]   shadow-sm`}>
          <div className='w-full flex items-center justify-between p-4'>
            <div className='space-x-2 flex items-center justify-center'>
              <BiLoaderCircle />
              <p>Ready to Refine <span className={`${light ? "bg-white" : "bg-[#12294E]"}px-1 rounded-md ml-2`}>3</span></p>
            </div>
            <div className='space-x-2 flex item-center justify-center'>
              <FaPlus />
              <LuAtom />
              <FaRegSquare />
            </div>
          </div>
          <div className='px-3'>
            {
              user?.map((item, index) => {
                return (
                  <Block key={index} light={light} title={item.title} date={item.date} logo={item.logo} aim={item.aim} plug={item.plug} sprint={item.sprint} images={item.images} />
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div style={{ display: 'flex', marginTop: '15px' }}>
        {boards.map(board => (
          <Droppable key={board.id} droppableId={board.id}>
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                style={getListStyle(snapshot.isDraggingOver)}
                {...provided.droppableProps}
              >
                {board.items.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
                      >
                        {item.content}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
}

export default QuoteApp;
