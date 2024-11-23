export default function layout({children, modal}:{
    children:React.ReactNode;
    modal:React.ReactNode;
  }) {
  return (
    <div className="relative">
      {children}
      { <div className="absolute top-0 left-0 ">{modal}</div>}
    </div>
   
  )
  }