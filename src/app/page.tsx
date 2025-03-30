"use client"
import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";

export default function Home() {
  const {currentView} = useSelector((state:RootState)=>state.globalSlice);
  return (
    <>{currentView}</>
  );
}
