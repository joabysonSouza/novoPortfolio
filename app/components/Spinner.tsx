import { useProgress } from "@react-three/drei";


export default function LoadingSpinner() {

    const {active} = useProgress()

    if(!active){
        return null
    }
  return (
    <div className=" w-full h-full flex items-center justify-center absolute ">
      <div
        className="h-30 w-30 animate-spin rounded-full border-8 border-blue-500 border-t-transparent"
        role="status"
        aria-label="Loading"
      />
    </div>
  );
}
