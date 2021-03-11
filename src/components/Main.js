import Input from './Input/Input';

const Main = (text) => {
  return (
    <main>
      <h2 className="ft-500 ft-poppins cl-gytwo">Inputs</h2>
      <div>
        <Input placeholder="Placeholder" inputId="demo" error />
      </div>
      <div>
        <Input placeholder="Placeholder" inputId="demo1" />
      </div>
      <div>
        <Input placeholder="Placeholder" inputId="demo2" disabled />
      </div>
      <div>
        <Input
          placeholder="Placeholder"
          inputId="demo3"
          helperText="Some interesting text"
          size="sm"
        />
      </div>
      <div>
        <Input placeholder="Placeholder" inputId="demo4" size="sm" fullWidth />
      </div>
    </main>
  );
};

export default Main;
