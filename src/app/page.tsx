"use client";
import { CldImage } from "next-cloudinary";
import { CldUploadButton } from "next-cloudinary";
import { useState } from "react";



export type UploadResult = {
  info: {
    public_id: string;
  };
  event: "success";
};


export default function Home() {
  const [imageId, setImageId] = useState("ltlsuwtlnrzhiwftypkg")
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CldUploadButton 
      onUpload={(result: UploadResult) => {
        setImageId(result.info.public_id);
        
      }}
      uploadPreset="p74yhugc" />
{imageId  && (
      <CldImage
        width="400"
        height="300"
        src={imageId}
        blurFaces
        sizes="100vw"
        alt="Description of my image"
      />

    )}
    </main>
  );
}
