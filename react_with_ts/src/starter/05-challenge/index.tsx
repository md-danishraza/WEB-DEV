// type Props= {
//   type:"basic"|"advance",
//   name:string,
//   email?:string
// }

// function Component(props:Props) {
//   if(props.type == "basic"){
//     return <h1 className="alert alert-danger">{props.name}</h1>
//   }

//   return (
//     <div>
//       <h2>React & Typescript</h2>
//       <h2>Challenge</h2>
//       <div className="alert alert-success">
//       <h3 >{
//         props.name
//       }</h3>
//       <h3>{
//         props.email
//       }</h3>
//       </div>
//     </div>
//   );
// }
// export default Component;


type BasicProfileCardProps = {
  type: 'basic';
  name: string;
};

type AdvancedProfileCardProps = {
  type: 'advance';
  name: string;
  email: string;
};
type ProfileCardProps = BasicProfileCardProps | AdvancedProfileCardProps;
function Component(props: ProfileCardProps) {
  const { type, name } = props;
  if (type === 'basic')
    return (
      <article className='alert alert-success'>
        <h2>user : {name}</h2>
      </article>
    );

  return (
    <article className='alert alert-danger'>
      <h2>user : {name}</h2>
      <h2>email : {props.email}</h2>
    </article>
  );
}
export default Component;