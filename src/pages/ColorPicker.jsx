import React from "react";
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs';
import { Header } from '../components';

const change = (args) => {
    if (args.currentValue && args.currentValue.hex) {
        document.getElementById('preview').style.backgroundColor = args.currentValue.hex;
    }
}

const ColorPicker = () => {
    return (
        <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
            <Header category="App" title="ColorPicker" />
            <div className="text-center">
                <div id="preview" style={{ height: '100px', width: '100px', margin: 'auto', backgroundColor: '#fff' }} />
                <div className="flex justify-center items-center gap-20 flex-wrap">
                    <div>
                        <p className="mb-4">Inline Palette</p>
                        <ColorPickerComponent
                            id="inline-pallete"
                            mode="Palette"
                            modeSwitcher={false}
                            change={change}
                            inline
                            showButtons={false}
                        />
                    </div>
                    <div>
                        <p className="mb-4">Inline Picker</p>
                        <ColorPickerComponent
                            id="inline-picker"
                            mode="Picker"
                            modeSwitcher={false}
                            inline
                            showButtons={false}
                            change={change}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ColorPicker;
