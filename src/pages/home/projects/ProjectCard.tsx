import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router";

interface ProjectCardinterface{
    index:number,
    title:string,
    stack:string,
    desc:string,
    slug:string,
    textColor:string,
    bgColor:string
}


export default function ProjectCard({
index,
title,
stack,
desc,
slug,
textColor,
bgColor
}:ProjectCardinterface)
{
   
// IF index == NaN or index < 1 -> show "0" ELSE IF index < 10  -> show "0" + index  
const formattedindex = (index > 0 && index < 10  ) ? "0" + index : isNaN(index) ? 0 : index; 


return (
    <article className={`border border-card-light/10 bg-surface rounded-[30px] flex flex-col gap-6 pt-6 pl-6 pb-8 max-h-[250px] relative after:w-[130px] after:h-[130px] after:absolute after:right-1/5 after:top-4 after:rounded-full after:blur-2xl ${bgColor}`}>
        <span className={`${textColor} text-lg font-extrabold`}>{formattedindex}</span>
        <h3 className="text-text text-[28px]">{title}</h3>
        <div className="flex flex-col gap-3">
            <span className="text-muted font-extrabold text-[13px]">{stack}</span>
            <p className="text-muted-2 text-sm">{desc}</p>
        </div>
        <NavLink to={slug} aria-label={"progetto " + slug.replace("-"," ")} className="rounded-full bg-text w-[44px] h-[44px] absolute grid place-items-center bottom-8 right-[20%] group">
            <ArrowUpRight className="w-[19px] h-[19px] group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" />
        </NavLink>
    </article>
    )
}
