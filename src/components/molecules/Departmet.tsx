/* eslint-disable @next/next/no-img-element */
interface DepartmentProps {
  imgSrc: string;
  name: string;
}

export default function Department({ imgSrc, name }: DepartmentProps) {
  return (
    <div className="flex flex-col text-center items-center space-y-2">      
      <div className="w-28 h-28 relative flex items-center justify-center rounded-full bg-primary-100">
        <img
          className="p-5"
          alt={'name'}
          src={imgSrc}          
        />        
      </div>
      <span className="text-sm font-medium text-primary-900">
        {name}
      </span>
    </div>
  );
};

