"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { createTrip } from "@/lib/actions/create-trip";
import { UploadButton } from "@/lib/upload-thing";
import { cn } from "@/lib/utils";
import { useState, useTransition } from "react";


export default function NewTrip() {

    const [isPending, startTransition] = useTransition();
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    return (
        <div className="max-w-lg mx-auto mt-10">
            <Card>
                <CardHeader>New Trip</CardHeader>
                <CardContent>
                    <form className="space-y-6" 
                    action={(formData: FormData) => {
                        if(imageUrl) {
                            formData.append("imageUrl", imageUrl);
                        }
                        startTransition(() => {
                            // form submission logic here
                            createTrip(formData)
                        });
                    }}>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                {" "}
                                Trip Title
                            </label>
                            <input
                                type="text"
                                name="title"
                                placeholder="Japan Trip..."
                                className={cn(
                                    "w-full border border-gray-300 px-3 py-2",
                                    "rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                )}
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                               Trip Description
                                
                            </label>
                            <textarea
                                name="description"
                                placeholder="Japan Trip..."
                                className={cn(
                                    "w-full border border-gray-300 px-3 py-2",
                                    "rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                )}
                                required
                            />
                        </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                         <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Start Date
                            </label>
                            <input
                                type="date"
                                name="startDate"
                                className={cn(
                                    "w-full border border-gray-300 px-3 py-2",
                                    "rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                )}
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                {" "}
                                End Date
                            </label>
                            <input
                                type="date"
                                name="endDate"
                                className={cn(
                                    "w-full border border-gray-300 px-3 py-2",
                                    "rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                )}
                                required
                            />
                        </div>
                    </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Trip Image
              </label>
              {imageUrl && (
                <img
                  src={imageUrl}
                  alt="Trip preview"
                  className="w-full mb-4 rounded-md max-h-48 object-cover"
                />
              )}
              <UploadButton
                endpoint="imageUploader"
                onClientUploadComplete={(res) => {
                  if (res && res[0]?.ufsUrl) {
                    setImageUrl(res[0].ufsUrl);
                  }
                }}
                onUploadError={(error: Error) => {
                  console.error("Upload Error:", error);
                  alert(`ERROR! ${error.message}`);
                }}
              />
            </div>

                    <Button type="submit" disabled={isPending} className="w-full">{isPending ? "Creating..." : "Create Trip"}</Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}