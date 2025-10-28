import Link from "next/link";
import React from "react";

type Prop = {
  name: string;
  img?: string;
  description?: string;
  species?: string;
  age?: string;
  house?: string;
  gender?: string;
  status?: string;
  id?: string | number;
  w?: string;
};

export default function Cards(props: Prop) {
  const { name, img, species, age, house, gender, status, id, w } = props;

  return (
    <div
      className={`card bg-base-100 ${
        w ? w : "w-70"
      }  shadow-sm transition-transform duration-300 hover:scale-105 cursor-pointer `}
    >
      <figure>
        <img src={img} alt="img" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          <div className="badge badge-secondary">{house}</div>
        </h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{species}</div>
          <div className="badge badge-outline">{gender}</div>
        </div>
        <Link
          className="bg-blue-200 rounded-2xl h-6 cursor-pointer hover:bg-blue-950 "
          href={`/rickandmorthy/${id}`}
        >
          Ver detalles
        </Link>
      </div>
    </div>
  );
}
