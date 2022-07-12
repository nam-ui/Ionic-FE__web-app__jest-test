import React from "react";
import "./style.css";
interface interface_option {
  title: string;
  value: string;
  srcImageTitle: string;
  code: string;
}
interface interface_props {
  value: any;
  changeValue: Function;
  choice: interface_option;
  changeChoice: Function;

  option: interface_option[];
}

const UI: React.FC<interface_props> = (props: interface_props) => {
  const [choice, setChoice] = React.useState<interface_option>({
    srcImageTitle: "https://cdn-icons-png.flaticon.com/512/206/206632.png",
    title: "vietnam",
    code: "mk",
    value: "84",
  });
  const value = props.value;
  const handlerChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const re = /^[0-9\b]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      props.changeValue(e.target.value);
    }
  };

  React.useMemo(() => {
    props.changeChoice(choice);
  }, [choice, props]);

  const handlerSelectOption = (_props_option: interface_option[]) => {
    return (
      <React.Fragment>
        <div className="custom_component_has-drop-down" tabIndex={0}>
          <div className="custom_componentcustom_component__choice-option">
            <img
              className="custom_component__choice-option-image"
              src={choice.srcImageTitle}
              alt="choice_image"
            />
          </div>
          <ul className="custom_component__container-option-name">
            {_props_option.map((option, key) => {
              return (
                <li
                  key={key}
                  className="custom_component__li"
                  onClick={(e) => {
                    setChoice({ ...choice, ...option });
                  }}
                >
                  <div className="custom_component_li__image">
                    <img
                      className="custom_component_li__image_src"
                      src={option.srcImageTitle}
                      alt="choice_image"
                    />
                  </div>
                  <div className="custom_component_li__title">
                    {option.title}
                  </div>
                  <sub className="custom_component_li__value_sub">
                    + {option.value}
                  </sub>
                </li>
              );
            })}
          </ul>
        </div>
      </React.Fragment>
    );
  };

  return (
    <React.Fragment>
      <div className="custom_component_container">
        <div className="custom_component__option">
          {handlerSelectOption(props.option)}
        </div>
        <div className="custom_component__input-div">
          <div className="choice_value">{`+ ${choice.value}`}</div>
          <input
            className="custom_component__input"
            value={value}
            onChange={handlerChangeValue}
            type="tel"
          />
        </div>
      </div>
    </React.Fragment>
  );
};
export default React.memo(UI);
