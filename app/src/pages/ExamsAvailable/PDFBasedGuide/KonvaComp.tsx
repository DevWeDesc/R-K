import imageBody from "@/../public/assets/littleBodyAnimal.png";
import { Button } from "@/components/ui/button";
import { useState, useRef } from "react";
import { useFormContext } from "react-hook-form";
import { Stage, Layer, Image, Line } from "react-konva";
import useImage from "use-image";
import { IFormSolicitation } from "./AllExamsWithType";

export const KonvaComp = () => {
  const [image] = useImage(imageBody);
  const [lines, setLines] = useState<any>([]);
  const [currentLine, setCurrentLine] = useState<any>([]);
  const [isPainting, setIsPainting] = useState(false);
  const stageRef = useRef(null);
  const { setValue } = useFormContext<IFormSolicitation>();

  const handleMouseDown = (event: any) => {
    setIsPainting(true);
    const { x, y } = event.target.getStage().getPointerPosition();
    setCurrentLine([{ x, y }]);
  };

  const handleMouseMove = (event: any) => {
    if (!isPainting) return;
    const { x, y } = event.target.getStage().getPointerPosition();
    setCurrentLine([...currentLine, { x, y }]);
    stageRef.current &&
      setValue("base64Image", stageRef.current.toDataURL({ pixelRatio: 3 }));
  };

  const handleMouseUp = () => {
    setIsPainting(false);
    setLines([...lines, currentLine]);
    setCurrentLine([]);
  };

  const saveImage = () => {
    if (stageRef.current) {
      const dataURL = stageRef.current.toDataURL({ pixelRatio: 3 });
      console.log(dataURL);
    }
  };

  const clearImage = () => setLines([]);

  return (
    <div>
      <Stage
        className="flex items-center justify-center w-full h-full cursor-pincel"
        width={400}
        height={150}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        ref={stageRef}
      >
        <Layer>
          <Image height={140} width={400} image={image} />
          {lines.map((line: any, index: any) => (
            <Line
              key={index}
              points={line.flatMap((point: any) => [point.x, point.y])}
              stroke="red"
              strokeWidth={5}
              lineCap="round"
              lineJoin="round"
            />
          ))}
          {currentLine.length > 0 && (
            <Line
              points={currentLine.flatMap((point: any) => [point.x, point.y])}
              stroke="red"
              strokeWidth={5}
              lineCap="round"
              lineJoin="round"
            />
          )}
        </Layer>
      </Stage>
      <div className="flex justify-end gap-2">
        <Button onClick={saveImage} size="sm">
          Salvar imagem
        </Button>
        <Button onClick={clearImage} size="sm">
          Limpar imagem
        </Button>
      </div>
    </div>
  );
};
