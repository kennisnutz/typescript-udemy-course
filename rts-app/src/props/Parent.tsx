import { ChildAsFC } from './Child';

const Parent = () => {
  const handleClick = () => {
    console.log('clicked');
  };
  return (
    <ChildAsFC color="red" onClick={handleClick}>
      hello child
    </ChildAsFC>
  );
};

export default Parent;
