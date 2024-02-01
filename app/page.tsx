import Image from "next/image";
import Button from "../app/ui/button"

export default function Home() {
  return (
    <>
      <p>Home Page</p>
      <Button text="Press to Chat" target="_blank" />
    </>
  );
}