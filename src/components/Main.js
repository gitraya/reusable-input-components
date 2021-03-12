import Input from './Input/Input';

const Main = (text) => {
  return (
    <main>
      <h2 className="ft-500 ft-poppins cl-gytwo">Inputs</h2>
      <div className="demo-container">
        <div className="demo-item">
          <small>{(text = '<Input />')}</small>
          <Input label="Label" placeholder="Placeholder" inputId="demo" />
        </div>
        <div className="demo-item">
          <small className="cl-hover">{(text = '&:hover')}</small>
          <Input label="Label" placeholder="Placeholder" inputId="demo1" />
        </div>
        <div className="demo-item">
          <small className="cl-hover">{(text = '&:focus')}</small>
          <Input label="Label" placeholder="Placeholder" inputId="demo2" />
        </div>
      </div>
      <div className="demo-container">
        <div className="demo-item">
          <small>{(text = '<Input error />')}</small>
          <Input
            label="Label"
            placeholder="Placeholder"
            inputId="demo3"
            error
          />
        </div>
        <div className="demo-item">
          <small className="cl-hover">{(text = '&:hover')}</small>
          <Input
            label="Label"
            placeholder="Placeholder"
            inputId="demo4"
            error
          />
        </div>
        <div className="demo-item">
          <small className="cl-hover">{(text = '&:focus')}</small>
          <Input
            label="Label"
            placeholder="Placeholder"
            inputId="demo5"
            error
          />
        </div>
      </div>
      <div className="demo-container">
        <div className="demo-item">
          <small>{(text = '<Input disabled />')}</small>
          <Input
            label="Label"
            placeholder="Placeholder"
            inputId="demo6"
            disabled
          />
        </div>
      </div>
      <div className="demo-container">
        <div className="demo-item">
          <small>
            {(text = '<Input helperText=”Some interesting text” />')}
          </small>
          <Input
            label="Label"
            placeholder="Placeholder"
            inputId="demo7"
            helperText="Some interesting text"
          />
        </div>
        <div className="demo-item">
          <small className="cl-hover">
            {(text = '<Input helperText=”Some interesting text” error />')}
          </small>
          <Input
            label="Label"
            placeholder="Placeholder"
            inputId="demo8"
            helperText="Some interesting text"
            error
          />
        </div>
      </div>
      <div className="demo-container">
        <div className="demo-item">
          <small>{(text = '<Input startIcon />')}</small>
          <Input
            label="Label"
            placeholder="Placeholder"
            inputId="demo9"
            startIcon={<i class="material-icons">local_phone</i>}
          />
        </div>
        <div className="demo-item">
          <small className="cl-hover">{(text = '<Input endIcon />')}</small>
          <Input
            label="Label"
            placeholder="Placeholder"
            inputId="demo10"
            endIcon={<i class="material-icons">lock</i>}
            error
          />
        </div>
      </div>
      <div className="demo-container">
        <div className="demo-item">
          <small>{(text = '<Input value=”text” />')}</small>
          <Input
            label="Label"
            placeholder="Placeholder"
            inputId="demo11"
            value="Text"
          />
        </div>
      </div>
      <div className="demo-container">
        <div className="demo-item">
          <small>{(text = '<Input size=”sm” />')}</small>
          <Input
            label="Label"
            placeholder="Placeholder"
            inputId="demo12"
            size="sm"
          />
        </div>
        <div className="demo-item">
          <small>{(text = '<Input size=”md” />')}</small>
          <Input
            label="Label"
            placeholder="Placeholder"
            inputId="demo13"
            size="md"
          />
        </div>
      </div>
      <div className="demo-container">
        <div className="demo-item full">
          <small>{(text = '<Input fullWidth />')}</small>
          <Input
            label="Label"
            placeholder="Placeholder"
            inputId="demo14"
            value="Text"
            fullWidth
          />
        </div>
      </div>
      <Input />
    </main>
  );
};

export default Main;
