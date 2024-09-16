import Trash from '../icons/Trash';
import { useEffect, useRef, useState } from 'react';
import { setNewOffset, setZIndex } from '../utils';

const NoteCard = ({ note }) => {
  const colors = JSON.parse(note.colors);
  const body = JSON.parse(note.body);

  const textAreaRef = useRef(null);
  /**
   * Drag n Drop Start
   */

  const [position, setPosition] = useState(JSON.parse(note.position));

  let mouseStartPos = { x: 0, y: 0 };

  const cardRef = useRef(null);

  const mouseDown = (e) => {
    mouseStartPos.x = e.clientX;
    mouseStartPos.y = e.clientY;
    document.addEventListener('mousemove', mouseMove);
    document.addEventListener('mouseup', mouseUp);
    setZIndex(cardRef.current);
  };

  const mouseMove = (e) => {
    const mouseMoveDir = {
      x: mouseStartPos.x - e.clientX,
      y: mouseStartPos.y - e.clientY,
    };

    mouseStartPos.x = e.clientX;
    mouseStartPos.y = e.clientY;
    // now it does not go out of screen
    const newPosition = setNewOffset(cardRef.current, mouseMoveDir);

    setPosition(newPosition);
  };

  const mouseUp = () => {
    document.removeEventListener('mousemove', mouseMove);
    document.removeEventListener('mouseup', mouseUp);
  };

  // Drag end

  useEffect(() => {
    autoGrow(textAreaRef);
  }, []);

  const autoGrow = (textarea) => {
    const { current } = textarea;

    current.style.height = 'auto';
    current.style.height = current.scrollHeight + 'px';
  };

  return (
    <div
      ref={cardRef}
      className='card'
      style={{
        backgroundColor: colors.colorBody,
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <div
        onMouseDown={mouseDown}
        className='card-header'
        style={{ backgroundColor: colors.colorHeader }}
      >
        <Trash />
      </div>
      <div className='card-body'>
        <textarea
          ref={textAreaRef}
          style={{ color: colors.colorText }}
          defaultValue={body}
          onInput={() => {
            autoGrow(textAreaRef);
          }}
          onFocus={() => {
            setZIndex(cardRef.current);
          }}
        ></textarea>
      </div>
    </div>
  );
};

export default NoteCard;
