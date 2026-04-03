import {cn} from "@/lib/utils"; 
 
const Page = () =>{
  const something =true;
  return(
    <div className={cn("flex", "flex-col", "items-center", "justify-center")}>
      Hello World
    </div>
  );
};

export default Page;