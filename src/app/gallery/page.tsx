"use client"

import { CldUploadButton } from "next-cloudinary";
import { UploadResult } from "../page";
import UploadButton from "./upload-button";

export default function GalleryPage() {
    return (
        <section>
        <div className="flex flex-col gap-8">
          <div className="flex justify-between">
            <h1 className="text-4xl font-bold">Gallery</h1>
            <UploadButton />

          </div>
          </div>
      </section>
    )
}