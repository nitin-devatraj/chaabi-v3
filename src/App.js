import ButtonWithLeftIcon from "./components/Buttons/ButtonWithLeftIcon/ButtonWithLeftIcon";
import ButtonWithRightIcon from "./components/Buttons/ButtonWithRightIcon/ButtonWithRightIcon";
import PrimaryButton from "./components/Buttons/PrimaryButton/PrimaryButton";
import SecondaryButton from "./components/Buttons/SecondaryButton/SecondaryButton";
import TertiaryButton from "./components/Buttons/TertiaryButton/TertiaryButton";
import uploadIcon from "./assets/icons/upload-icon.svg";
import cancelIcon from "./assets/icons/cancel-icon.svg";
import ButtonGroup from "./components/Buttons/ButtonGroup/ButtonGroup";
import NavigationButtonGroup from "./components/Buttons/NavigationButtonGroup/NavigationButtonGroup";
import ModalActionButtons from "./components/Buttons/ModalActionButtons/ModalActionButtons";
import EmailInput from "./components/InputFields/EmailInput/EmailInput";
import PhoneInput from "./components/InputFields/PhoneInput/PhoneInput";
import TogglePairButtons from "./components/Buttons/TogglePairButtons/TogglePairButtons";
import FileInput from "./components/InputFields/FileInput/FileInput";
import cloudIcon from "./assets/icons/cloud-upload-icon.svg";
import TabGroup from "./components/TabGroup/TabGroup";
import TextInput from "./components/InputFields/TextInput/TextInput";
import Accordian from "./components/Accordian/Accordian";
import SelectInput from "./components/InputFields/SelectInput/SelectInput";
import Notifications from "./components/Notifications/Notifications";

function App() {
  return (
    <div className="app-container">
      <div>
        primary button : <PrimaryButton>button</PrimaryButton>
      </div>

      <div>
        secondary button : <SecondaryButton>button</SecondaryButton>
      </div>

      <div>
        tertiary button : <TertiaryButton>button</TertiaryButton>
      </div>

      <div>
        btn w/th left icon :{" "}
        <ButtonWithLeftIcon>
          <img src={uploadIcon} alt="#" />
          import
        </ButtonWithLeftIcon>
      </div>

      <div>
        btn w/th right icon :{" "}
        <ButtonWithRightIcon>
          <img src={cancelIcon} alt="#" />
          all time
        </ButtonWithRightIcon>
      </div>

      <div>
        btn group : <ButtonGroup buttons={["btn1", "btn2", "btn3", "btn4"]} />
      </div>
      <div>
        Previous next icons : <NavigationButtonGroup />
      </div>

      <div>
        modal buttons :{" "}
        <ModalActionButtons
          primaryButtonText="confirm"
          secondaryButtonText="cancel"
        />
      </div>

      <div>
        email - input :{" "}
        <EmailInput label="Email" helperText="this is some text hint" />
      </div>

      <div>
        phone - input :{" "}
        <PhoneInput label="Phone number" helperText="this is some text hint" />
      </div>

      <div>
        toggle pair button :{" "}
        <TogglePairButtons
          label="Gender"
          firstButton="male"
          secondButton="female"
        />
      </div>

      <div>
        file - input :{" "}
        <FileInput
          iconSource={cloudIcon}
          supportingText="SVG, PNG, JPG or GIF (max. 800x400px)"
          accept="*"
        />
      </div>
      <div>
        tab - group : <TabGroup tabs={["tab1", "tab2", "tab3", "tab4"]} />
      </div>

      <div>
        text - input : <TextInput />
      </div>

      <hr />

      <div>
        select - input :{" "}
        <SelectInput
          options={[
            "gurgoan",
            "bombay",
            "hyd",
            "calcutta",
            "bombay",
            "hyd",
            "calcutta",
          ]}
        />
      </div>

      <div>
        accordian :{" "}
        <Accordian
          tabs={[
            "Accordian title - 1",
            "Accordian title - 2",
            "Accordian title - 3",
          ]}
        />
      </div>

      <div>
        notification :{" "}
        <Notifications
          tabs={[
            {
              title: "modal window",
              content:
                "When you do something noble and beautiful and nobody noticed, do not be sad. For the sun every morning is a beautiful spectacle and yet most of the audience still sleeps.",
              type: "alert",
            },
            {
              title: "modal window",
              content:
                "When you do something noble and beautiful and nobody noticed, do not be sad. For the sun every morning is a beautiful spectacle and yet most of the audience still sleeps.",
              type: "success",
            },
            {
              title: "modal window",
              content:
                "When you do something noble and beautiful and nobody noticed, do not be sad. For the sun every morning is a beautiful spectacle and yet most of the audience still sleeps.",
              type: "warning",
            },
            {
              title: "modal window",
              content:
                "When you do something noble and beautiful and nobody noticed, do not be sad. For the sun every morning is a beautiful spectacle and yet most of the audience still sleeps.",
              type: "info",
            },
          ]}
        />
      </div>
    </div>
  );
}

export default App;
