"use client";
import Image from "next/image";
import React from "react";

interface CardProps {
  title: string;
  subtitle: string;
  duration: string;
  description: string;
  price: string;
}

export default function Card({
  title,
  subtitle,
  duration,
  description,
  price,
}: CardProps) {
  const handleActivate = () => alert("Activated!");

  return (
    <div className="card">
      {/* Imagen */}
      <div className="card-image-container">
        <div className="card-inner-img">
          <Image
            src="/placeholder.svg?height=304&width=574"
            alt="Person with headphones"
            width={574}
            height={304}
            className="w-full h-full bg-[var(--color-bg-image)] object-cover"
            priority
          />
        </div>
      </div>

      {/* Contenido textual */}
      <div className="card-content">
        <div className="flex items-center justify-between">
          <h1 className="card-heading">{title}</h1>
          <span className="card-badge">{duration}</span>
        </div>
        <h2 className="card-subheading">{subtitle}</h2>
        <p className="card-description">
          {description}
        </p>
        <div className="flex space-x-4 mt-4">
          <div className="social-icon bg-red-600" />
          <div className="social-icon bg-blue-600" />
          <div className="social-icon bg-gradient-to-tr from-[#FCAF45] via-[#FD1D1D] to-[#833AB4]" />
          <div className="social-icon bg-black" />
        </div>
      </div>

      {/* Footer con precio y botón */}
      <div className="card-footer">
        <span className="price">{price}</span>
        <button onClick={handleActivate} className="btn-activate">
          Activate
        </button>
      </div>
    </div>
  );
}
