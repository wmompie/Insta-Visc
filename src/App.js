/* eslint-disable no-sequences */
/* eslint-disable react/no-direct-mutation-state */
import React, { Component } from 'react';
import styled from 'styled-components';

import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';
import { Card, Button } from 'react-bootstrap';
// import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
// const decoratedOnClick = useAccordionToggle(eventKey, onClick);

class App extends Component {
    state = {
      PickerValue: '',
      PickerValue2: '',
      value: 'val',
      value1: '',
      value2: '',
      visc: '',
      time: '___',
      calculation: 'calc1',
      calculation2: 'calc2',
      bool: 'true',
      first: 'false',
      second: 'true',
      error: '',
      errormsg: 'Outside of Cup Range',
      count: 0,
      counter: [],

      color1: 'black',
      color2: 'black',
      color3: 'black',
      color4: 'black',
      color5: 'black',
      color6: 'black',
      color7: 'black',
      color8: 'black',
      color9: 'black',
      color10: 'black',
      color11: 'black',
      color12: 'black',
      color13: 'black',
      color14: 'black',
      color15: 'black',
      color16: 'black',
      color17: 'black',
      color18: 'black',
      color19: 'black',
      color20: 'black',
      color21: 'black',
      color22: 'black',
      color23: 'black',
      color24: 'black',
      color25: 'black',
      color26: 'black',
      color27: 'black',
      color28: 'black',
      color29: 'black',
      color30: 'black',
      color31: 'black',
      color32: 'black',
      color33: 'black',
      color34: 'black',
      color35: 'black',
      color36: 'black',
      color37: 'black',
      color38: 'black',
      color39: 'black',
      color40: 'black',
      color41: 'black',
      color42: 'black',
      color43: 'black',
      color44: 'black',
      color45: 'black',
      color46: 'black',
      color47: 'black',
      color48: 'black',
      color49: 'black',
      color50: 'black',
      color51: 'black',
      color52: 'black',
      color53: 'black',
      color54: 'black',
      color55: 'black',
      color56: 'black',
      color57: 'black',
  };

  color = visc => {
    if (visc < 10 || visc > 36) {
      this.setState({ color1: black });
    } else {
      this.setState({ color1: green });
    }

    if (visc < 19 || visc > 156) {
      this.setState({ color2: black });
    } else {
      this.setState({ color2: green });
    }

    if (visc < 64 || visc > 596) {
      this.setState({ color3: black });
    } else {
      this.setState({ color3: green });
    }

    if (visc < 79 || visc > 784) {
      this.setState({ color4: black });
    } else {
      this.setState({ color4: green });
    }

    if (visc < 161 || visc > 1401) {
      this.setState({ color5: black });
    } else {
      this.setState({ color5: green });
    }

    if (visc < 15 || visc > 78) {
      this.setState({ color6: black });
    } else {
      this.setState({ color6: green });
    }

    if (visc < 39 || visc > 238) {
      this.setState({ color7: black });
    } else {
      this.setState({ color7: green });
    }

    if (visc < 63 || visc > 604) {
      this.setState({ color8: black });
    } else {
      this.setState({ color8: green });
    }

    if (visc < 97 || visc > 899) {
      this.setState({ color9: black });
    } else {
      this.setState({ color9: green });
    }

    if (visc < 219 || visc > 1627) {
      this.setState({ color10: black });
    } else {
      this.setState({ color10: green });
    }

    if (visc < 2 || visc > 14) {
      this.setState({ color11: black });
    } else {
      this.setState({ color11: green });
    }

    if (visc < 12 || visc > 40) {
      this.setState({ color12: black });
    } else {
      this.setState({ color12: green });
    }

    if (visc < 25 || visc > 120) {
      this.setState({ color13: black });
    } else {
      this.setState({ color13: green });
    }

    if (visc < 29 || visc > 273) {
      this.setState({ color14: black });
    } else {
      this.setState({ color14: green });
    }

    if (visc < 53 || visc > 441) {
      this.setState({ color15: black });
    } else {
      this.setState({ color15: green });
    }

    if (visc < 215 || visc > 1413) {
      this.setState({ color16: black });
    } else {
      this.setState({ color16: green });
    }

    if (visc < 29 || visc > 273) {
      this.setState({ color17: black });
    } else {
      this.setState({ color17: green });
    }

    if (visc < 34 || visc > 441) {
      this.setState({ color18: black });
    } else {
      this.setState({ color18: green });
    }

    if (visc < 77 || visc > 1413) {
      this.setState({ color19: black });
    } else {
      this.setState({ color19: green });
    }

    if (visc < 11 || visc > 48) {
      this.setState({ color20: black });
    } else {
      this.setState({ color20: green });
    }

    if (visc < 19 || visc > 136) {
      this.setState({ color21: black });
    } else {
      this.setState({ color21: green });
    }

    if (visc < 35 || visc > 320) {
      this.setState({ color22: black });
    } else {
      this.setState({ color22: green });
    }

    if (visc < 167 || visc > 1125) {
      this.setState({ color23: black });
    } else {
      this.setState({ color23: green });
    }

    if (visc < 7 || visc > 42) {
      this.setState({ color24: black });
    } else {
      this.setState({ color24: green });
    }

    if (visc < 35 || visc > 149) {
      this.setState({ color25: black });
    } else {
      this.setState({ color25: green });
    }

    if (visc < 142 || visc > 684) {
      this.setState({ color26: black });
    } else {
      this.setState({ color26: green });
    }

    if (visc < 69 || visc > 545) {
      this.setState({ color27: black });
    } else {
      this.setState({ color27: green });
    }

    if (visc < 2 || visc > 14) {
      this.setState({ color28: black });
    } else {
      this.setState({ color28: green });
    }

    if (visc < 12 || visc > 40) {
      this.setState({ color29: black });
    } else {
      this.setState({ color29: green });
    }

    if (visc < 25 || visc > 120) {
      this.setState({ color30: black });
    } else {
      this.setState({ color30: green });
    }

    if (visc < 29 || visc > 273) {
      this.setState({ color31: black });
    } else {
      this.setState({ color31: green });
    }

    if (visc < 34 || visc > 441) {
      this.setState({ color32: black });
    } else {
      this.setState({ color32: green });
    }

    if (visc < 77 || visc > 1413) {
      this.setState({ color33: black });
    } else {
      this.setState({ color33: green });
    }

    if (visc < 5 || visc > 52) {
      this.setState({ color34: black });
    } else {
      this.setState({ color34: green });
    }

    if (visc < 19 || visc > 163) {
      this.setState({ color35: black });
    } else {
      this.setState({ color35: green });
    }

    if (visc < 84 || visc > 823) {
      this.setState({ color36: black });
    } else {
      this.setState({ color36: green });
    }

    if (visc < 187 || visc > 2611) {
      this.setState({ color37: black });
    } else {
      this.setState({ color37: green });
    }

    if (visc < 38 || visc > 545) {
      this.setState({ color38: black });
    } else {
      this.setState({ color38: green });
    }

    if (visc < 11 || visc > 48) {
      this.setState({ color39: black });
    } else {
      this.setState({ color39: green });
    }

    if (visc < 19 || visc > 136) {
      this.setState({ color40: black });
    } else {
      this.setState({ color40: green });
    }

    if (visc < 35 || visc > 320) {
      this.setState({ color41: black });
    } else {
      this.setState({ color41: green });
    }

    if (visc < 167 || visc > 1125) {
      this.setState({ color42: black });
    } else {
      this.setState({ color42: green });
    }

    if (visc < 7 || visc > 165) {
      this.setState({ color43: black });
    } else {
      this.setState({ color43: green });
    }

    if (visc < 117 || visc > 582) {
      this.setState({ color44: black });
    } else {
      this.setState({ color44: green });
    }

    if (visc < 498 || visc > 2297) {
      this.setState({ color45: black });
    } else {
      this.setState({ color45: green });
    }

    if (visc < 3445 || visc > 15408) {
      this.setState({ color46: black });
    } else {
      this.setState({ color46: green });
    }

    if (visc < 0 || visc > 60) {
      this.setState({ color47: black });
    } else {
      this.setState({ color47: green });
    }

    if (visc < 30 || visc > 230) {
      this.setState({ color48: black });
    } else {
      this.setState({ color48: green });
    }

    if (visc < 150 || visc > 830) {
      this.setState({ color49: black });
    } else {
      this.setState({ color49: green });
    }

    if (visc < 230 || visc > 1100) {
      this.setState({ color50: black });
    } else {
      this.setState({ color50: green });
    }

    if (visc < 460 || visc > 1800) {
      this.setState({ color51: black });
    } else {
      this.setState({ color51: green });
    }

    if (visc < 70 || visc > 370) {
      this.setState({ color52: black });
    } else {
      this.setState({ color52: green });
    }
  };

  color2 = time => {
    if (time < 39.89 || time > 60.05) {
      this.setState({ color1: black });
    } else {
      this.setState({ color1: green });
    }

    if (time < 20.07 || time > 60.15) {
      this.setState({ color2: black });
    } else {
      this.setState({ color2: green });
    }

    if (time < 11.43 || time > 60.04) {
      this.setState({ color3: black });
    } else {
      this.setState({ color3: green });
    }

    if (time < 10.7 || time > 59.97) {
      this.setState({ color4: black });
    } else {
      this.setState({ color4: green });
    }

    if (time < 9.99 || time > 59.99) {
      this.setState({ color5: black });
    } else {
      this.setState({ color5: green });
    }

    if (time < 31.08 || time > 60.23) {
      this.setState({ color6: black });
    } else {
      this.setState({ color6: green });
    }

    if (time < 18.93 || time > 59.97) {
      this.setState({ color7: black });
    } else {
      this.setState({ color7: green });
    }

    if (time < 11.18 || time > 59.98) {
      this.setState({ color8: black });
    } else {
      this.setState({ color8: green });
    }

    if (time < 10.01 || time > 60.02) {
      this.setState({ color9: black });
    } else {
      this.setState({ color9: green });
    }

    if (time < 10.01 || time > 59.99) {
      this.setState({ color10: black });
    } else {
      this.setState({ color10: green });
    }

    if (time < 28.34 || time > 62.13) {
      this.setState({ color11: black });
    } else {
      this.setState({ color11: green });
    }

    if (time < 29.71 || time > 60.44) {
      this.setState({ color12: black });
    } else {
      this.setState({ color12: green });
    }

    if (time < 18.48 || time > 51.41) {
      this.setState({ color13: black });
    } else {
      this.setState({ color13: green });
    }

    if (time < 11.47 || time > 60.08) {
      this.setState({ color14: black });
    } else {
      this.setState({ color14: green });
    }

    if (time < 9.89 || time > 60.04) {
      this.setState({ color15: black });
    } else {
      this.setState({ color15: green });
    }

    if (time < 9.98 || time > 60.02) {
      this.setState({ color16: black });
    } else {
      this.setState({ color16: green });
    }

    if (time < 22.94 || time > 120.16) {
      this.setState({ color17: black });
    } else {
      this.setState({ color17: green });
    }

    if (time < 15.96 || time > 120.09) {
      this.setState({ color18: black });
    } else {
      this.setState({ color18: green });
    }

    if (time < 9.99 || time > 120.03) {
      this.setState({ color19: black });
    } else {
      this.setState({ color19: green });
    }

    if (time < 22.21 || time > 59.91) {
      this.setState({ color20: black });
    } else {
      this.setState({ color20: green });
    }

    if (time < 14.03 || time > 59.99) {
      this.setState({ color21: black });
    } else {
      this.setState({ color21: green });
    }

    if (time < 9.95 || time > 59.94) {
      this.setState({ color22: black });
    } else {
      this.setState({ color22: green });
    }

    if (time < 9.95 || time > 59.71) {
      this.setState({ color23: black });
    } else {
      this.setState({ color23: green });
    }

    if (time < 15.28 || time > 49.67) {
      this.setState({ color24: black });
    } else {
      this.setState({ color24: green });
    }

    if (time < 15.18 || time > 55.04) {
      this.setState({ color25: black });
    } else {
      this.setState({ color25: green });
    }

    if (time < 12.01 || time > 49.98) {
      this.setState({ color26: black });
    } else {
      this.setState({ color26: green });
    }

    if (time < 10.02 || time > 60.04) {
      this.setState({ color27: black });
    } else {
      this.setState({ color27: green });
    }

    if (time < 56.68 || time > 124.26) {
      this.setState({ color28: black });
    } else {
      this.setState({ color28: green });
    }

    if (time < 59.41 || time > 120.87) {
      this.setState({ color29: black });
    } else {
      this.setState({ color29: green });
    }

    if (time < 36.96 || time > 102.81) {
      this.setState({ color30: black });
    } else {
      this.setState({ color30: green });
    }

    if (time < 22.94 || time > 120.16) {
      this.setState({ color31: black });
    } else {
      this.setState({ color31: green });
    }

    if (time < 15.96 || time > 120.09) {
      this.setState({ color32: black });
    } else {
      this.setState({ color32: green });
    }

    if (time < 9.99 || time > 120.03) {
      this.setState({ color33: black });
    } else {
      this.setState({ color33: green });
    }

    if (time < 27.62 || time > 121.11) {
      this.setState({ color34: black });
    } else {
      this.setState({ color34: green });
    }

    if (time < 23.15 || time > 133.33) {
      this.setState({ color35: black });
    } else {
      this.setState({ color35: green });
    }

    if (time < 17.03 || time > 119.96) {
      this.setState({ color36: black });
    } else {
      this.setState({ color36: green });
    }

    if (time < 9.99 || time > 120) {
      this.setState({ color37: black });
    } else {
      this.setState({ color37: green });
    }

    if (time < 14.94 || time > 120.08) {
      this.setState({ color38: black });
    } else {
      this.setState({ color38: green });
    }

    if (time < 22.21 || time > 59.91) {
      this.setState({ color39: black });
    } else {
      this.setState({ color39: green });
    }

    if (time < 14.03 || time > 59.99) {
      this.setState({ color40: black });
    } else {
      this.setState({ color40: green });
    }

    if (time < 9.95 || time > 59.94) {
      this.setState({ color41: black });
    } else {
      this.setState({ color41: green });
    }

    if (time < 9.95 || time > 59.71) {
      this.setState({ color42: black });
    } else {
      this.setState({ color42: green });
    }

    if (time < 25.09 || time > 111.1) {
      this.setState({ color43: black });
    } else {
      this.setState({ color43: green });
    }

    if (time < 25.1 || time > 120.92) {
      this.setState({ color44: black });
    } else {
      this.setState({ color44: green });
    }

    if (time < 24.97 || time > 110.92) {
      this.setState({ color45: black });
    } else {
      this.setState({ color45: green });
    }

    if (time < 25 || time > 110.9) {
      this.setState({ color46: black });
    } else {
      this.setState({ color46: green });
    }

    if (time < 29 || time > 83.55) {
      this.setState({ color47: black });
    } else {
      this.setState({ color47: green });
    }

    if (time < 22.57 || time > 79.71) {
      this.setState({ color48: black });
    } else {
      this.setState({ color48: green });
    }

    if (time < 20.32 || time > 78.44) {
      this.setState({ color49: black });
    } else {
      this.setState({ color49: green });
    }

    if (time < 20.54 || time > 79.32) {
      this.setState({ color50: black });
    } else {
      this.setState({ color50: green });
    }

    if (time < 20 || time > 78.26) {
      this.setState({ color51: black });
    } else {
      this.setState({ color51: green });
    }

    if (time < 25 || time > 100) {
      this.setState({ color52: black });
    } else {
      this.setState({ color52: green });
    }
  };

  count = input => {
    if (input !== 0) {
      this.state.counter[this.state.count] = input;
      let add = this.state.count + 1;
      this.setState({
        count: add,
      });
    }
  };

  catchVal = input => {
    if (input > -900 && input < 500000) {
      let output = input;
      return output;
    } else {
      let output = '';
      return output;
    }
  };

  handleChangetext = (input) => {
    const calculated = this.calculate(
      this.state.PickerValue,
      input.target.value,
      this.state.bool,
      this.state.first,
      this.state.second
    );
    const calculatedValue = this.catchVal(calculated);
    this.count(this.state.PickerValue);
    this.setState({
      bool: 'true',
      second: 'false',
      value1: input.target.value,
      value: input.target.value,
      value2: `${calculatedValue}`,
    });
  };

  handleChangetext2 = input => {
    const calculated2 = this.calculate(
      this.state.PickerValue,
      input.target.value,
      this.state.bool,
      this.state.first,
      this.state.second
    );
    const calculatedValue2 = this.catchVal(calculated2);
    this.count(this.state.PickerValue);
    this.setState({
      bool: 'false',
      second: 'false',
      value2: input.target.value,
      value: input.target.value,
      value1: `${calculatedValue2}`,
    });
  };

  calculate = (cup, x, bool, first, second) => {
    if (first === 'false' && second === 'false') {
      if (bool === 'true') {
        this.color2(x);
        if (cup === '1') {
          let calc = 0.875 * x - 993 / x;
          calc = calc.toFixed(2);

          if (calc < 10 || calc > 36) {
            this.setState({
              error: this.state.errormsg,
            });
          } else {
            this.setState({
              error: '',
            });
          }
          this.setState({ value2: calc });

          return calc;
        } else if (cup === '2') {
          let calc = 2.8 * x - 747 / x;
          calc = calc.toFixed(2);

          if (calc < 19 || calc > 156) {
            this.setState({ error: this.state.errormsg });
          } else {
            this.setState({ error: '' });
          }
          this.setState({ value2: calc });

          return calc;
        } else if (cup === '3') {
          let calc = 10.09 * x - 587 / x;
          calc = calc.toFixed(2);

          if (calc < 64 || calc > 596) {
            this.setState({ error: this.state.errormsg });
          } else {
            this.setState({ error: '' });
          }

          this.setState({ value2: calc });

          return calc;
        } else if (cup === '4') {
          let calc = 13.26 * x - 673 / x;
          calc = calc.toFixed(2);

          if (calc < 79 || calc > 784) {
            this.setState({ error: this.state.errormsg });
          } else {
            this.setState({ error: '' });
          }

          this.setState({ value2: calc });

          return calc;
        } else if (cup === '5') {
          let calc = 23.56 * x - 744 / x;
          calc = calc.toFixed(2);

          if (calc < 161 || calc > 1401) {
            this.setState({ error: this.state.errormsg });
          } else {
            this.setState({ error: '' });
          }

          this.setState({ value2: calc });

          return calc;
        } else if (cup === '6') {
          let calc = 1.59 * x - 1070 / x;
          calc = calc.toFixed(2);

          if (calc < 15 || calc > 78) {
            this.setState({ error: this.state.errormsg });
          } else {
            this.setState({ error: '' });
          }

          this.setState({ value2: calc });

          return calc;
        } else if (cup === '7') {
          let calc = 4.18 * x - 760 / x;
          calc = calc.toFixed(2);

          if (calc < 39 || calc > 238) {
            this.setState({ error: this.state.errormsg });
          } else {
            this.setState({ error: '' });
          }

          this.setState({ value2: calc });

          return calc;
        } else if (cup === '8') {
          let calc = 10.23 * x - 575 / x;
          calc = calc.toFixed(2);

          if (calc < 63 || calc > 604) {
            this.setState({ error: this.state.errormsg });
          } else {
            this.setState({ error: '' });
          }

          this.setState({ value2: calc });

          return calc;
        } else if (cup === '9') {
          let calc = 15.13 * x - 545 / x;
          calc = calc.toFixed(2);

          if (calc < 97 || calc > 899) {
            this.setState({ error: this.state.errormsg });
          } else {
            this.setState({ error: '' });
          }

          this.setState({ value2: calc });

          return calc;
        } else if (cup === '10') {
          let calc = 27.27 * x - 540 / x;
          calc = calc.toFixed(2);

          if (calc < 219 || calc > 1627) {
            this.setState({ error: this.state.errormsg });
          } else {
            this.setState({ error: '' });
          }

          this.setState({ value2: calc });

          return calc;
        } else if (cup === '11') {
          let calc = 0.266 * x - 157 / x;
          calc = calc.toFixed(2);

          if (calc < 2 || calc > 14) {
            this.setState({ error: this.state.errormsg });
          } else {
            this.setState({ error: '' });
          }

          this.setState({ value2: calc });

          return calc;
        } else if (cup === '12') {
          let calc = 0.744 * x - 300 / x;
          calc = calc.toFixed(2);

          if (calc < 12 || calc > 40) {
            this.setState({ error: this.state.errormsg });
          } else {
            this.setState({ error: '' });
          }

          this.setState({ value2: calc });

          return calc;
        } else if (cup === '13') {
          let calc = 2.48 * x - 385 / x;
          calc = calc.toFixed(2);

          if (calc < 25 || calc > 120) {
            this.setState({ error: this.state.errormsg });
          } else {
            this.setState({ error: '' });
          }

          this.setState({ value2: calc });

          return calc;
        } else if (cup === '14') {
          let calc = 4.62 * x - 275 / x;
          calc = calc.toFixed(2);

          if (calc < 29 || calc > 273) {
            this.setState({ error: this.state.errormsg });
          } else {
            this.setState({ error: '' });
          }

          this.setState({ value2: calc });

          return calc;
        } else if (cup === '15') {
          let calc = 7.4 * x - 200 / x;
          calc = calc.toFixed(2);

          if (calc < 53 || calc > 441) {
            this.setState({ error: this.state.errormsg });
          } else {
            this.setState({ error: '' });
          }

          this.setState({ value2: calc });

          return calc;
        } else if (cup === '16') {
          let calc = 23.6 * x - 204 / x;
          calc = calc.toFixed(2);

          if (calc < 215 || calc > 1413) {
            this.setState({ error: this.state.errormsg });
          } else {
            this.setState({ error: '' });
          }

          this.setState({ value2: calc });

          return calc;
        } else if (cup === '17') {
          let calc = 2.31 * x - 550 / x;
          calc = calc.toFixed(2);

          if (calc < 29 || calc > 273) {
            this.setState({ error: this.state.errormsg });
          } else {
            this.setState({ error: '' });
          }

          this.setState({ value2: calc });

          return calc;
        } else if (cup === '18') {
          let calc = 3.7 * x - 400 / x;
          calc = calc.toFixed(2);

          if (calc < 34 || calc > 441) {
            this.setState({ error: this.state.errormsg });
          } else {
            this.setState({ error: '' });
          }

          this.setState({ value2: calc });

          return calc;
        } else if (cup === '19') {
          let calc = 11.8 * x - 408 / x;
          calc = calc.toFixed(2);

          if (calc < 77 || calc > 1413) {
            this.setState({ error: this.state.errormsg });
          } else {
            this.setState({ error: '' });
          }

          this.setState({ value2: calc });

          return calc;
        } else if (cup === '20') {
          let calc = 0.85 * x - 175 / x;
          calc = calc.toFixed(2);

          if (calc < 11 || calc > 48) {
            this.setState({ error: this.state.errormsg });
          } else {
            this.setState({ error: '' });
          }

          this.setState({ value2: calc });

          return calc;
        } else if (cup === '21') {
          let calc = 2.32 * x - 190 / x;
          calc = calc.toFixed(2);

          if (calc < 19 || calc > 136) {
            this.setState({ error: this.state.errormsg });
          } else {
            this.setState({ error: '' });
          }

          this.setState({ value2: calc });

          return calc;
        } else if (cup === '22') {
          let calc = 5.39 * x - 185 / x;
          calc = calc.toFixed(2);

          if (calc < 35 || calc > 320) {
            this.setState({ error: this.state.errormsg });
          } else {
            this.setState({ error: '' });
          }

          this.setState({ value2: calc });

          return calc;
        } else if (cup === '23') {
          let calc = 18.9 * x - 210 / x;
          calc = calc.toFixed(2);

          if (calc < 167 || calc > 1125) {
            this.setState({ error: this.state.errormsg });
          } else {
            this.setState({ error: '' });
          }

          this.setState({ value2: calc });

          return calc;
        } else if (cup === '24') {
          let calc = 0.866 * x - 100 / x;
          calc = calc.toFixed(2);

          if (calc < 7 || calc > 42) {
            this.setState({ error: this.state.errormsg });
          } else {
            this.setState({ error: '' });
          }

          this.setState({ value2: calc });

          return calc;
        } else if (cup === '25') {
          let calc = 2.74 * x - 100 / x;
          calc = calc.toFixed(2);

          if (calc < 35 || calc > 149) {
            this.setState({ error: this.state.errormsg });
          } else {
            this.setState({ error: '' });
          }

          this.setState({ value2: calc });

          return calc;
        } else if (cup === '26') {
          let calc = 13.8 * x - 285 / x;
          calc = calc.toFixed(2);

          if (calc < 142 || calc > 684) {
            this.setState({ error: this.state.errormsg });
          } else {
            this.setState({ error: '' });
          }

          this.setState({ value2: calc });

          return calc;
        } else if (cup === '27') {
          let calc = 9.14 * x - 226 / x;
          calc = calc.toFixed(2);

          if (calc < 69 || calc > 545) {
            this.setState({ error: this.state.errormsg });
          } else {
            this.setState({ error: '' });
          }

          this.setState({ value2: calc });

          return calc;
        } else if (cup === '28') {
          let calc = 0.133 * x - 313 / x;
          calc = calc.toFixed(2);

          if (calc < 2 || calc > 14) {
            this.setState({ error: this.state.errormsg });
          } else {
            this.setState({ error: '' });
          }

          this.setState({ value2: calc });

          return calc;
        } else if (cup === '29') {
          let calc = 0.372 * x - 600 / x;
          calc = calc.toFixed(2);

          if (calc < 12 || calc > 40) {
            this.setState({ error: this.state.errormsg });
          } else {
            this.setState({ error: '' });
          }

          this.setState({ value2: calc });

          return calc;
        } else if (cup === '30') {
          let calc = 1.24 * x - 770 / x;
          calc = calc.toFixed(2);

          if (calc < 25 || calc > 120) {
            this.setState({ error: this.state.errormsg });
          } else {
            this.setState({ error: '' });
          }

          this.setState({ value2: calc });

          return calc;
        } else if (cup === '31') {
          let calc = 2.31 * x - 550 / x;
          calc = calc.toFixed(2);

          if (calc < 29 || calc > 273) {
            this.setState({ error: this.state.errormsg });
          } else {
            this.setState({ error: '' });
          }

          this.setState({ value2: calc });

          return calc;
        } else if (cup === '32') {
          let calc = 3.7 * x - 400 / x;
          calc = calc.toFixed(2);

          if (calc < 34 || calc > 441) {
            this.setState({ error: this.state.errormsg });
          } else {
            this.setState({ error: '' });
          }

          this.setState({ value2: calc });

          return calc;
        } else if (cup === '33') {
          let calc = 11.8 * x - 408 / x;
          calc = calc.toFixed(2);

          if (calc < 77 || calc > 1413) {
            this.setState({ error: this.state.errormsg });
          } else {
            this.setState({ error: '' });
          }

          this.setState({ value2: calc });

          return calc;
        } else if (cup === '34') {
          let calc = 0.443 * x - 200 / x;
          calc = calc.toFixed(2);

          if (calc < 5 || calc > 52) {
            this.setState({ error: this.state.errormsg });
          } else {
            this.setState({ error: '' });
          }

          this.setState({ value2: calc });

          return calc;
        } else if (cup === '35') {
          let calc = 1.37 * x - 200 / x;
          calc = calc.toFixed(2);

          if (calc < 19 || calc > 163) {
            this.setState({ error: this.state.errormsg });
          } else {
            this.setState({ error: '' });
          }

          this.setState({ value2: calc });

          return calc;
        } else if (cup === '36') {
          let calc = 6.9 * x - 570 / x;
          calc = calc.toFixed(2);

          if (calc < 84 || calc > 823) {
            this.setState({ error: this.state.errormsg });
          } else {
            this.setState({ error: '' });
          }

          this.setState({ value2: calc });

          return calc;
        } else if (cup === '37') {
          let calc = 21.78 * x - 306 / x;
          calc = calc.toFixed(2);

          if (calc < 187 || calc > 2611) {
            this.setState({ error: this.state.errormsg });
          } else {
            this.setState({ error: '' });
          }

          this.setState({ value2: calc });

          return calc;
        } else if (cup === '38') {
          let calc = 4.57 * x - 452 / x;
          calc = calc.toFixed(2);

          if (calc < 38 || calc > 545) {
            this.setState({ error: this.state.errormsg });
          } else {
            this.setState({ error: '' });
          }

          this.setState({ value2: calc });

          return calc;
        } else if (cup === '39') {
          let calc = 0.85 * x - 175 / x;
          calc = calc.toFixed(2);

          if (calc < 11 || calc > 48) {
            this.setState({ error: this.state.errormsg });
          } else {
            this.setState({ error: '' });
          }

          this.setState({ value2: calc });

          return calc;
        } else if (cup === '40') {
          let calc = 2.32 * x - 190 / x;
          calc = calc.toFixed(2);

          if (calc < 19 || calc > 136) {
            this.setState({ error: this.state.errormsg });
          } else {
            this.setState({ error: '' });
          }

          this.setState({ value2: calc });

          return calc;
        } else if (cup === '41') {
          let calc = 5.39 * x - 185 / x;
          calc = calc.toFixed(2);

          if (calc < 35 || calc > 320) {
            this.setState({ error: this.state.errormsg });
          } else {
            this.setState({ error: '' });
          }

          this.setState({ value2: calc });

          return calc;
        } else if (cup === '42') {
          let calc = 18.9 * x - 210 / x;
          calc = calc.toFixed(2);

          if (calc < 167 || calc > 1125) {
            this.setState({ error: this.state.errormsg });
          } else {
            this.setState({ error: '' });
          }

          this.setState({ value2: calc });

          return calc;
        } else if (cup === '43') {
          let calc = 1.55 * x - 800 / x;
          calc = calc.toFixed(2);

          if (calc < 7 || calc > 165) {
            this.setState({ error: this.state.errormsg });
          } else {
            this.setState({ error: '' });
          }

          this.setState({ value2: calc });

          return calc;
        } else if (cup === '44') {
          let calc = 4.82 * x - 100 / x;
          calc = calc.toFixed(2);

          if (calc < 117 || calc > 582) {
            this.setState({ error: this.state.errormsg });
          } else {
            this.setState({ error: '' });
          }

          this.setState({ value2: calc });

          return calc;
        } else if (cup === '45') {
          let calc = 20.75 * x - 500 / x;
          calc = calc.toFixed(2);

          if (calc < 498 || calc > 2297) {
            this.setState({ error: this.state.errormsg });
          } else {
            this.setState({ error: '' });
          }

          this.setState({ value2: calc });

          return calc;
        } else if (cup === '46') {
          let calc = 139 * x - 750 / x;
          calc = calc.toFixed(2);

          if (calc < 3445 || calc > 15408) {
            this.setState({ error: this.state.errormsg });
          } else {
            this.setState({ error: '' });
          }

          this.setState({ value2: calc });

          return calc;
        } else if (cup === '47') {
          let calc = 1.1 * (x - 29);
          calc = calc.toFixed(2);

          if (calc < 0 || calc > 60) {
            this.setState({ error: this.state.errormsg });
          } else {
            this.setState({ error: '' });
          }

          this.setState({ value2: calc });

          return calc;
        } else if (cup === '48') {
          let calc = 3.5 * (x - 14);
          calc = calc.toFixed(2);

          if (calc < 30 || calc > 230) {
            this.setState({ error: this.state.errormsg });
          } else {
            this.setState({ error: '' });
          }

          this.setState({ value2: calc });

          return calc;
        } else if (cup === '49') {
          let calc = 11.7 * (x - 7.5);
          calc = calc.toFixed(2);

          if (calc < 150 || calc > 830) {
            this.setState({ error: this.state.errormsg });
          } else {
            this.setState({ error: '' });
          }

          this.setState({ value2: calc });

          return calc;
        } else if (cup === '50') {
          let calc = 14.8 * (x - 5);
          calc = calc.toFixed(2);

          if (calc < 230 || calc > 1100) {
            this.setState({ error: this.state.errormsg });
          } else {
            this.setState({ error: '' });
          }

          this.setState({ value2: calc });

          return calc;
        } else if (cup === '51') {
          let calc = 23 * x;
          calc = calc.toFixed(2);

          if (calc < 460 || calc > 1800) {
            this.setState({ error: this.state.errormsg });
          } else {
            this.setState({ error: '' });
          }

          this.setState({ value2: calc });

          return calc;
        } else if (cup === '52') {
          let calc = 3.28 * x - 220 / x;
          calc = calc.toFixed(2);

          if (calc < 70 || calc > 370) {
            this.setState({ error: this.state.errormsg });
          } else {
            this.setState({ error: '' });
          }

          this.setState({ value2: calc });

          return calc;
        }
      } else {
        this.color(x);
        if (cup === '1') {
          if (x < 10 || x > 36) {
            this.setState({ error: this.state.errormsg });
          } else {
            this.setState({ error: '' });
          }
          let calc = Math.sqrt(x * x + 3476);
          let calc2 = parseFloat(x);
          calc2 = (calc + calc2) / 1.75;
          calc2 = calc2.toFixed(2);
          this.setState({ value1: calc2 });

          return calc2;
        } else if (cup === '2') {
          let calc = Math.sqrt(x * x + 8366);
          let calc2 = parseFloat(x);
          calc2 = (calc + calc2) / 5.6;
          calc2 = calc2.toFixed(2);

          if (x < 19 || x > 156) {
            this.setState({ error: this.state.errormsg });
          } else {
            this.setState({ error: '' });
          }
          this.setState({ value1: calc2 });

          return calc2;
        } else if (cup === '3') {
          let calc = Math.sqrt(x * x + 23691);
          let calc2 = parseFloat(x);
          calc2 = (calc + calc2) / 20.18;
          calc2 = calc2.toFixed(2);

          if (x < 64 || x > 596) {
            this.setState({ error: this.state.errormsg });
          } else {
            this.setState({ error: '' });
          }
          this.setState({ value1: calc2 });

          return calc2;
        } else if (cup === '4') {
          let calc = Math.sqrt(x * x + 35696);
          let calc2 = parseFloat(x);
          calc2 = (calc + calc2) / 26.52;
          calc2 = calc2.toFixed(2);

          if (x < 79 || x > 784) {
            this.setState({ error: this.state.errormsg });
          } else {
            this.setState({ error: '' });
          }
          this.setState({ value1: calc2 });

          return calc2;
        } else if (cup === '5') {
          let calc = Math.sqrt(x * x + 70115);
          let calc2 = parseFloat(x);
          calc2 = (calc + calc2) / 47.12;
          calc2 = calc2.toFixed(2);
          if (x < 161 || x > 1401) {
            this.setState({ error: this.state.errormsg });
          } else {
            this.setState({ error: '' });
          }
          this.setState({ value1: calc2 });

          return calc2;
        } else if (cup === '6') {
          let calc = Math.sqrt(x * x + 6805);
          let calc2 = parseFloat(x);
          calc2 = (calc + calc2) / 3.18;
          calc2 = calc2.toFixed(2);
          if (x < 15 || x > 78) {
            this.setState({ error: this.state.errormsg });
          } else {
            this.setState({ error: '' });
          }
          this.setState({ value1: calc2 });

          return calc2;
        } else if (cup === '7') {
          let calc = Math.sqrt(x * x + 12707);
          let calc2 = parseFloat(x);
          calc2 = (calc + calc2) / 8.36;
          calc2 = calc2.toFixed(2);
          if (x < 39 || x > 238) {
            this.setState({ error: this.state.errormsg });
          } else {
            this.setState({ error: '' });
          }
          this.setState({ value1: calc2 });

          return calc2;
        } else if (cup === '8') {
          let calc = Math.sqrt(x * x + 23529);
          let calc2 = parseFloat(x);
          calc2 = (calc + calc2) / 20.46;
          calc2 = calc2.toFixed(2);
          if (x < 63 || x > 604) {
            this.setState({ error: this.state.errormsg });
          } else {
            this.setState({ error: '' });
          }
          this.setState({ value1: calc2 });

          return calc2;
        } else if (cup === '9') {
          let calc = Math.sqrt(x * x + 32983);
          let calc2 = parseFloat(x);
          calc2 = (calc + calc2) / 30.26;
          calc2 = calc2.toFixed(2);
          if (x < 97 || x > 899) {
            this.setState({ error: this.state.errormsg });
          } else {
            this.setState({ error: '' });
          }
          this.setState({ value1: calc2 });

          return calc2;
        } else if (cup === '10') {
          let calc = Math.sqrt(x * x + 58903);
          let calc2 = parseFloat(x);
          calc2 = (calc + calc2) / 54.54;
          calc2 = calc2.toFixed(2);
          if (x < 219 || x > 1627) {
            this.setState({ error: this.state.errormsg });
          } else {
            this.setState({ error: '' });
          }
          this.setState({ value1: calc2 });

          return calc2;
        } else if (cup === '11') {
          let calc = Math.sqrt(x * x + 167);
          let calc2 = parseFloat(x);
          calc2 = (calc + calc2) / 0.532;
          calc2 = calc2.toFixed(2);
          if (x < 2 || x > 14) {
            this.setState({ error: this.state.errormsg });
          } else {
            this.setState({ error: '' });
          }
          this.setState({ value1: calc2 });

          return calc2;
        } else if (cup === '12') {
          let calc = Math.sqrt(x * x + 893);
          let calc2 = parseFloat(x);
          calc2 = (calc + calc2) / 1.488;
          calc2 = calc2.toFixed(2);
          if (x < 12 || x > 40) {
            this.setState({ error: this.state.errormsg });
          } else {
            this.setState({ error: '' });
          }
          this.setState({ value1: calc2 });

          return calc2;
        } else if (cup === '13') {
          let calc = Math.sqrt(x * x + 3819);
          let calc2 = parseFloat(x);
          calc2 = (calc + calc2) / 4.96;
          calc2 = calc2.toFixed(2);
          if (x < 25 || x > 120) {
            this.setState({ error: this.state.errormsg });
          } else {
            this.setState({ error: '' });
          }
          this.setState({ value1: calc2 });

          return calc2;
        } else if (cup === '14') {
          let calc = Math.sqrt(x * x + 5082);
          let calc2 = parseFloat(x);
          calc2 = (calc + calc2) / 9.24;
          calc2 = calc2.toFixed(2);
          if (x < 29 || x > 273) {
            this.setState({ error: this.state.errormsg });
          } else {
            this.setState({ error: '' });
          }
          this.setState({ value1: calc2 });

          return calc2;
        } else if (cup === '15') {
          let calc = Math.sqrt(x * x + 5920);
          let calc2 = parseFloat(x);
          calc2 = (calc + calc2) / 14.8;
          calc2 = calc2.toFixed(2);
          if (x < 53 || x > 441) {
            this.setState({ error: this.state.errormsg });
          } else {
            this.setState({ error: '' });
          }
          this.setState({ value1: calc2 });
          return calc2;
        } else if (cup === '16') {
          let calc = Math.sqrt(x * x + 19258);
          let calc2 = parseFloat(x);
          calc2 = (calc + calc2) / 47.2;
          calc2 = calc2.toFixed(2);
          if (x < 215 || x > 1413) {
            this.setState({ error: this.state.errormsg });
          } else {
            this.setState({ error: '' });
          }
          this.setState({ value1: calc2 });

          return calc2;
        } else if (cup === '17') {
          let calc = Math.sqrt(x * x + 5082);
          let calc2 = parseFloat(x);
          calc2 = (calc + calc2) / 4.62;
          calc2 = calc2.toFixed(2);
          if (x < 29 || x > 273) {
            this.setState({ error: this.state.errormsg });
          } else {
            this.setState({ error: '' });
          }
          this.setState({ value1: calc2 });

          return calc2;
        } else if (cup === '18') {
          let calc = Math.sqrt(x * x + 5920);
          let calc2 = parseFloat(x);
          calc2 = (calc + calc2) / 7.4;
          calc2 = calc2.toFixed(2);
          if (x < 34 || x > 441) {
            this.setState({ error: this.state.errormsg });
          } else {
            this.setState({ error: '' });
          }
          this.setState({ value1: calc2 });

          return calc2;
        } else if (cup === '19') {
          let calc = Math.sqrt(x * x + 19258);
          let calc2 = parseFloat(x);
          calc2 = (calc + calc2) / 23.6;
          calc2 = calc2.toFixed(2);
          if (x < 77 || x > 1413) {
            this.setState({ error: this.state.errormsg });
          } else {
            this.setState({ error: '' });
          }
          this.setState({ value1: calc2 });

          return calc2;
        } else if (cup === '20') {
          let calc = Math.sqrt(x * x + 595);
          let calc2 = parseFloat(x);
          calc2 = (calc + calc2) / 1.7;
          calc2 = calc2.toFixed(2);
          if (x < 11 || x > 48) {
            this.setState({ error: this.state.errormsg });
          } else {
            this.setState({ error: '' });
          }
          this.setState({ value1: calc2 });

          return calc2;
        } else if (cup === '21') {
          let calc = Math.sqrt(x * x + 1763);
          let calc2 = parseFloat(x);
          calc2 = (calc + calc2) / 4.64;
          calc2 = calc2.toFixed(2);
          if (x < 19 || x > 136) {
            this.setState({ error: this.state.errormsg });
          } else {
            this.setState({ error: '' });
          }
          this.setState({ value1: calc2 });

          return calc2;
        } else if (cup === '22') {
          let calc = Math.sqrt(x * x + 3989);
          let calc2 = parseFloat(x);
          calc2 = (calc + calc2) / 10.78;
          calc2 = calc2.toFixed(2);
          if (x < 35 || x > 320) {
            this.setState({ error: this.state.errormsg });
          } else {
            this.setState({ error: '' });
          }
          this.setState({ value1: calc2 });

          return calc2;
        } else if (cup === '23') {
          let calc = Math.sqrt(x * x + 15876);
          let calc2 = parseFloat(x);
          calc2 = (calc + calc2) / 37.8;
          calc2 = calc2.toFixed(2);
          if (x < 167 || x > 1125) {
            this.setState({ error: this.state.errormsg });
          } else {
            this.setState({ error: '' });
          }
          this.setState({ value1: calc2 });

          return calc2;
        } else if (cup === '24') {
          let calc = Math.sqrt(x * x + 354);
          let calc2 = parseFloat(x);
          calc2 = (calc + calc2) / 1.772;
          calc2 = calc2.toFixed(2);
          if (x < 7 || x > 42) {
            this.setState({ error: this.state.errormsg });
          } else {
            this.setState({ error: '' });
          }
          this.setState({ value1: calc2 });

          return calc2;
        } else if (cup === '25') {
          let calc = Math.sqrt(x * x + 1096);
          let calc2 = parseFloat(x);
          calc2 = (calc + calc2) / 5.48;
          calc2 = calc2.toFixed(2);
          if (x < 35 || x > 149) {
            this.setState({ error: this.state.errormsg });
          } else {
            this.setState({ error: '' });
          }
          this.setState({ value1: calc2 });

          return calc2;
        } else if (cup === '26') {
          let calc = Math.sqrt(x * x + 15732);
          let calc2 = parseFloat(x);
          calc2 = (calc + calc2) / 27.6;
          calc2 = calc2.toFixed(2);
          if (x < 142 || x > 684) {
            this.setState({ error: this.state.errormsg });
          } else {
            this.setState({ error: '' });
          }
          this.setState({ value1: calc2 });

          return calc2;
        } else if (cup === '27') {
          let calc = Math.sqrt(x * x + 8263);
          let calc2 = parseFloat(x);
          calc2 = (calc + calc2) / 18.28;
          calc2 = calc2.toFixed(2);
          if (x < 69 || x > 545) {
            this.setState({ error: this.state.errormsg });
          } else {
            this.setState({ error: '' });
          }
          this.setState({ value1: calc2 });
          return calc2;
        } else if (cup === '28') {
          let calc = Math.sqrt(x * x + 167);
          let calc2 = parseFloat(x);
          calc2 = (calc + calc2) / 0.266;
          calc2 = calc2.toFixed(2);
          if (x < 2 || x > 14) {
            this.setState({ error: this.state.errormsg });
          } else {
            this.setState({ error: '' });
          }
          this.setState({ value1: calc2 });

          return calc2;
        } else if (cup === '29') {
          let calc = Math.sqrt(x * x + 893);
          let calc2 = parseFloat(x);
          calc2 = (calc + calc2) / 0.744;
          calc2 = calc2.toFixed(2);
          if (x < 12 || x > 40) {
            this.setState({ error: this.state.errormsg });
          } else {
            this.setState({ error: '' });
          }
          this.setState({ value1: calc2 });

          return calc2;
        } else if (cup === '30') {
          let calc = Math.sqrt(x * x + 3819);
          let calc2 = parseFloat(x);
          calc2 = (calc + calc2) / 2.48;
          calc2 = calc2.toFixed(2);
          if (x < 25 || x > 120) {
            this.setState({ error: this.state.errormsg });
          } else {
            this.setState({ error: '' });
          }
          this.setState({ value1: calc2 });

          return calc2;
        } else if (cup === '31') {
          let calc = Math.sqrt(x * x + 5082);
          let calc2 = parseFloat(x);
          calc2 = (calc + calc2) / 4.62;
          calc2 = calc2.toFixed(2);
          if (x < 29 || x > 273) {
            this.setState({ error: this.state.errormsg });
          } else {
            this.setState({ error: '' });
          }
          this.setState({ value1: calc2 });

          return calc2;
        } else if (cup === '32') {
          let calc = Math.sqrt(x * x + 5920);
          let calc2 = parseFloat(x);
          calc2 = (calc + calc2) / 7.4;
          calc2 = calc2.toFixed(2);
          if (x < 34 || x > 441) {
            this.setState({ error: this.state.errormsg });
          } else {
            this.setState({ error: '' });
          }
          this.setState({ value1: calc2 });

          return calc2;
        } else if (cup === '33') {
          let calc = Math.sqrt(x * x + 19258);
          let calc2 = parseFloat(x);
          calc2 = (calc + calc2) / 23.6;
          calc2 = calc2.toFixed(2);
          if (x < 77 || x > 1413) {
            this.setState({ error: this.state.errormsg });
          } else {
            this.setState({ error: '' });
          }
          this.setState({ value1: calc2 });

          return calc2;
        } else if (cup === '34') {
          let calc = Math.sqrt(x * x + 354);
          let calc2 = parseFloat(x);
          calc2 = (calc + calc2) / 0.886;
          calc2 = calc2.toFixed(2);
          if (x < 5 || x > 52) {
            this.setState({ error: this.state.errormsg });
          } else {
            this.setState({ error: '' });
          }
          this.setState({ value1: calc2 });

          return calc2;
        } else if (cup === '35') {
          let calc = Math.sqrt(x * x + 1096);
          let calc2 = parseFloat(x);
          calc2 = (calc + calc2) / 2.74;
          calc2 = calc2.toFixed(2);
          if (x < 19 || x > 163) {
            this.setState({ error: this.state.errormsg });
          } else {
            this.setState({ error: '' });
          }
          this.setState({ value1: calc2 });

          return calc2;
        } else if (cup === '36') {
          let calc = Math.sqrt(x * x + 15732);
          let calc2 = parseFloat(x);
          calc2 = (calc + calc2) / 13.8;
          calc2 = calc2.toFixed(2);
          if (x < 84 || x > 823) {
            this.setState({ error: this.state.errormsg });
          } else {
            this.setState({ error: '' });
          }
          this.setState({ value1: calc2 });

          return calc2;
        } else if (cup === '37') {
          let calc = Math.sqrt(x * x + 26659);
          let calc2 = parseFloat(x);
          calc2 = (calc + calc2) / 43.56;
          calc2 = calc2.toFixed(2);
          if (x < 187 || x > 2611) {
            this.setState({ error: this.state.errormsg });
          } else {
            this.setState({ error: '' });
          }
          this.setState({ value1: calc2 });

          return calc2;
        } else if (cup === '38') {
          let calc = Math.sqrt(x * x + 8263);
          let calc2 = parseFloat(x);
          calc2 = (calc + calc2) / 9.14;
          calc2 = calc2.toFixed(2);
          if (x < 38 || x > 545) {
            this.setState({ error: this.state.errormsg });
          } else {
            this.setState({ error: '' });
          }
          this.setState({ value1: calc2 });

          return calc2;
        } else if (cup === '39') {
          let calc = Math.sqrt(x * x + 595);
          let calc2 = parseFloat(x);
          calc2 = (calc + calc2) / 1.7;
          calc2 = calc2.toFixed(2);
          if (x < 11 || x > 48) {
            this.setState({ error: this.state.errormsg });
          } else {
            this.setState({ error: '' });
          }
          this.setState({ value1: calc2 });

          return calc2;
        } else if (cup === '40') {
          let calc = Math.sqrt(x * x + 1763);
          let calc2 = parseFloat(x);
          calc2 = (calc + calc2) / 4.64;
          calc2 = calc2.toFixed(2);
          if (x < 19 || x > 136) {
            this.setState({ error: this.state.errormsg });
          } else {
            this.setState({ error: '' });
          }
          this.setState({ value1: calc2 });

          return calc2;
        } else if (cup === '41') {
          let calc = Math.sqrt(x * x + 3989);
          let calc2 = parseFloat(x);
          calc2 = (calc + calc2) / 10.78;
          calc2 = calc2.toFixed(2);
          if (x < 35 || x > 320) {
            this.setState({ error: this.state.errormsg });
          } else {
            this.setState({ error: '' });
          }
          this.setState({ value1: calc2 });

          return calc2;
        } else if (cup === '42') {
          let calc = Math.sqrt(x * x + 15876);
          let calc2 = parseFloat(x);
          calc2 = (calc + calc2) / 37.8;
          calc2 = calc2.toFixed(2);
          if (x < 167 || x > 1125) {
            this.setState({ error: this.state.errormsg });
          } else {
            this.setState({ error: '' });
          }
          this.setState({ value1: calc2 });

          return calc2;
        } else if (cup === '43') {
          let calc = Math.sqrt(x * x + 4960);
          let calc2 = parseFloat(x);
          calc2 = (calc + calc2) / 3.1;
          calc2 = calc2.toFixed(2);
          if (x < 7 || x > 165) {
            this.setState({ error: this.state.errormsg });
          } else {
            this.setState({ error: '' });
          }
          this.setState({ value1: calc2 });

          return calc2;
        } else if (cup === '44') {
          let calc = Math.sqrt(x * x + 1928);
          let calc2 = parseFloat(x);
          calc2 = (calc + calc2) / 9.64;
          calc2 = calc2.toFixed(2);
          if (x < 117 || x > 582) {
            this.setState({ error: this.state.errormsg });
          } else {
            this.setState({ error: '' });
          }
          this.setState({ value1: calc2 });

          return calc2;
        } else if (cup === '45') {
          let calc = Math.sqrt(x * x + 41500);
          let calc2 = parseFloat(x);
          calc2 = (calc + calc2) / 41.5;
          calc2 = calc2.toFixed(2);
          if (x < 498 || x > 2297) {
            this.setState({ error: this.state.errormsg });
          } else {
            this.setState({ error: '' });
          }
          this.setState({ value1: calc2 });

          return calc2;
        } else if (cup === '46') {
          let calc = Math.sqrt(x * x + 417000);
          let calc2 = parseFloat(x);
          calc2 = (calc + calc2) / 278;
          calc2 = calc2.toFixed(2);
          if (x < 3445 || x > 15408) {
            this.setState({ error: this.state.errormsg });
          } else {
            this.setState({ error: '' });
          }
          this.setState({ value1: calc2 });

          return calc2;
        } else if (cup === '47') {
          let calc = x / 1.1 + 29;
          calc = calc.toFixed(2);
          if (x < 0 || x > 60) {
            this.setState({ error: this.state.errormsg });
          } else {
            this.setState({ error: '' });
          }
          this.setState({ value1: calc });

          return calc;
        } else if (cup === '48') {
          let calc = x / 3.5 + 14;
          calc = calc.toFixed(2);
          if (x < 30 || x > 230) {
            this.setState({ error: this.state.errormsg });
          } else {
            this.setState({ error: '' });
          }
          this.setState({ value1: calc });

          return calc;
        } else if (cup === '49') {
          let calc = x / 11.7 + 7.5;
          calc = calc.toFixed(2);
          if (x < 150 || x > 830) {
            this.setState({ error: this.state.errormsg });
          } else {
            this.setState({ error: '' });
          }
          this.setState({ value1: calc });

          return calc;
        } else if (cup === '50') {
          let calc = x / 14.8 + 5;
          calc = calc.toFixed(2);
          if (x < 230 || x > 1100) {
            this.setState({ error: this.state.errormsg });
          } else {
            this.setState({ error: '' });
          }
          this.setState({ value1: calc });

          return calc;
        } else if (cup === '51') {
          let calc = x / 23;
          calc = calc.toFixed(2);
          if (x < 460 || x > 1800) {
            this.setState({ error: this.state.errormsg });
          } else {
            this.setState({ error: '' });
          }
          this.setState({ value1: calc });

          return calc;
        } else if (cup === '52') {
          let calc = Math.sqrt(x * x + 2886.4);
          let calc2 = parseFloat(x);
          calc2 = (calc + calc2) / 6.56;
          calc2 = calc2.toFixed(2);
          if (x < 70 || x > 370) {
            this.setState({ error: this.state.errormsg });
          } else {
            this.setState({ error: '' });
          }
          this.setState({ value1: calc2 });

          return calc2;
        }
      }
      this.setState({ PickerValue2: cup });
    }
    this.setState({ PickerValue2: cup });
  };

  componentDidMount() {
    this.calculate(
      this.state.PickerValue,
      this.state.value,
      this.state.bool,
      this.state.first,
      this.state.second
    );
  };



  render() {
    const { color1, color2, color3, color4, color5, color6, color7, color8, color9, color10, color11, color12, color13, color14, color15, color16, color17, color18, color19, color20, color21, color22, color23, color24, color25, color26, color27, color28, color29, color30, color31, color32, color33, color34, color35, color36, color37, color38, color39, color40, color41, color42, color43, color44, color45, color46, color47, color48, color49, color50, color51, color52, PickerValue, count, counter, value, value1, value2, first, second, bool, error} = this.state

    if (PickerValue === 0 && first === 'false') {
      let recount = count - 1;
      let xx = counter[recount];
      this.setState({
        PickerValue: `${xx}`,
        count: recount,
      });
    }
    return (
      <MainContainer>
        <img
          src={'https://i.postimg.cc/vmt9vfcr/GARDCO-BYKlogo.png'}
          style={{ width: '100%', height: '100%', margin: '10px auto' }}
          alt={'GARDCO Logo'}
        />
        <Accordion defaultActiveKey='1'>
          <Card style={{border: 'none'}}>
            <Card.Header style={{textAlign: 'center', background: 'none'}}>
              <Accordion.Toggle as={Button} eventKey='0' style={{backgroundColor: '#487eb0'}}>
                Instruction for Use. Click me!
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey='0'>
              <Card.Body style={{borderBottom: '1px solid rgba(0,0,0,.125)'}}>
                <h5>
                  Enter data for either <InstructionSpan>Time</InstructionSpan> or{' '}
                  <InstructionSpan>Viscosity</InstructionSpan> below. Once one of them is entered,
                  select a cup provided in the list that is within range marked
                  with green and the other text field will automatically
                  populate. <small><InstructionSpan>***This is based off the calculation of exactly 25°C fluid.</InstructionSpan></small>
                </h5>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>

        <form name='visc-form'>
          <Calculation>Time (seconds)</Calculation>
          <TextInputStyle
            onChange={this.handleChangetext}
            value={value1}
            type='text'
            onSubmit={() => {
              this.calculate(PickerValue, value, bool, first, second);
            }}
            placeholder='Enter Time Data'
          />
          <Calculation>Viscosity (cSt)</Calculation>
          <TextInputStyle
            onChange={this.handleChangetext2}
            value={value2}
            type='text'
            onSubmit={() => {
              this.calculate(PickerValue, value, bool, first, second);
            }}
            placeholder='Enter Viscosity Data'
          />
          <Error>{error}</Error>
          <CupSelector
            name=''
            defaultValue={PickerValue}
            onChange={itemValue => {
              // eslint-disable-next-line no-unused-expressions
              this.calculate(
                itemValue.target.value,
                value,
                bool,
                first,
                second
              ),
                this.setState({
                  PickerValue: itemValue.target.value,
                  first: 'false',
                }),
                this.count(itemValue.target.value);
            }}
          >
            <option disable selected label='Select a Cup' value=''>
              Select a Cup
            </option>
            <option style={{ color: color1 }} label='EZ #1' value='1'>
              EZ #1
            </option>
            <option style={{ color: color2 }} label='EZ #2' value='2'>
              EZ #2
            </option>
            <option style={{ color: color3 }} label='EZ #3' value='3'>
              EZ #3
            </option>
            <option style={{ color: color4 }} label='EZ #4' value='4'>
              EZ #4
            </option>
            <option style={{ color: color5 }} label='EZ #5' value='5'>
              EZ #5
            </option>

            <option style={{ color: color6 }} label='S90 #1' value='6'>
              S90 #1
            </option>
            <option style={{ color: color7 }} label='S90 #2' value='7'>
              S90 #2
            </option>
            <option style={{ color: color8 }} label='S90 #3' value='8'>
              S90 #3
            </option>
            <option style={{ color: color9 }} label='S90 #4' value='9'>
              S90 #4
            </option>
            <option style={{ color: color10 }} label='S90 #5' value='10'>
              S90 #5
            </option>

            <option
              style={{ color: color47 }}
              label='BYK Zahn Cup #1'
              value='47'
            >
              BYK Zahn Cup #1
            </option>
            <option
              style={{ color: color48 }}
              label='BYK Zahn Cup #2'
              value='48'
            >
              BYK Zahn Cup #2
            </option>
            <option
              style={{ color: color49 }}
              label='BYK Zahn Cup #3'
              value='49'
            >
              BYK Zahn Cup #3
            </option>
            <option
              style={{ color: color50 }}
              label='BYK Zahn Cup #4'
              value='50'
            >
              BYK Zahn Cup #4
            </option>
            <option
              style={{ color: color51 }}
              label='BYK Zahn Cup #5'
              value='51'
            >
              BYK Zahn Cup #5
            </option>

            <option
              style={{ color: color11 }}
              label='Mini Ford Dip #0'
              value='11'
            >
              Mini Ford Dip #0
            </option>
            <option
              style={{ color: color12 }}
              label='Mini Ford Dip #1'
              value='12'
            >
              Mini Ford Dip #1
            </option>
            <option
              style={{ color: color13 }}
              label='Mini Ford Dip #2'
              value='13'
            >
              Mini Ford Dip #2
            </option>
            <option
              style={{ color: color14 }}
              label='Mini Ford Dip #3'
              value='14'
            >
              Mini Ford Dip #3
            </option>
            <option
              style={{ color: color15 }}
              label='Mini Ford Dip #4'
              value='15'
            >
              Mini Ford Dip #4
            </option>
            <option
              style={{ color: color16 }}
              label='Mini Ford Dip #5'
              value='16'
            >
              Mini Ford Dip #5
            </option>

            <option style={{ color: color17 }} label='Ford Dip #3' value='17'>
              Ford Dip #3
            </option>
            <option style={{ color: color18 }} label='Ford Dip #4' value='18'>
              Ford Dip #4
            </option>
            <option style={{ color: color19 }} label='Ford Dip #5' value='19'>
              Ford Dip #5
            </option>

            <option
              style={{ color: color20 }}
              label='Fisher Dip Cup #1'
              value='20'
            >
              Fisher Dip Cup #1
            </option>
            <option
              style={{ color: color21 }}
              label='Fisher Dip Cup #2'
              value='21'
            >
              Fisher Dip Cup #2
            </option>
            <option
              style={{ color: color22 }}
              label='Fisher Dip Cup #3'
              value='22'
            >
              Fisher Dip Cup #3
            </option>
            <option
              style={{ color: color23 }}
              label='Fisher Dip Cup #4'
              value='23'
            >
              Fisher Dip Cup #4
            </option>

            <option style={{ color: color24 }} label='Iso Dip 3mm' value='24'>
              Iso Dip 3mm
            </option>
            <option style={{ color: color25 }} label='Iso Dip 4mm' value='25'>
              Iso Dip 4mm
            </option>
            <option style={{ color: color26 }} label='Iso Dip 5mm' value='26'>
              Iso Dip 5mm
            </option>

            <option style={{ color: color27 }} label='Din Dip 4mm' value='27'>
              Din Dip 4mm
            </option>

            <option style={{ color: color28 }} label='Ford Cup #0' value='28'>
              Ford Cup #0
            </option>
            <option style={{ color: color29 }} label='Ford Cup #1' value='29'>
              Ford Cup #1
            </option>
            <option style={{ color: color30 }} label='Ford Cup #2' value='30'>
              Ford Cup #2
            </option>
            <option style={{ color: color31 }} label='Ford Cup #3' value='31'>
              Ford Cup #3
            </option>
            <option style={{ color: color32 }} label='Ford Cup #4' value='32'>
              Ford Cup #4
            </option>
            <option style={{ color: color33 }} label='Ford Cup #5' value='33'>
              Ford Cup #5
            </option>

            <option style={{ color: color34 }} label='Iso Cup 3mm' value='34'>
              Iso Cup 3mm
            </option>
            <option style={{ color: color35 }} label='Iso Cup 4mm' value='35'>
              Iso Cup 4mm
            </option>
            <option style={{ color: color52 }} label='Iso Cup 5mm' value='52'>
              Iso Cup 5mm
            </option>
            <option style={{ color: color36 }} label='Iso Cup 6mm' value='36'>
              Iso Cup 6mm
            </option>
            <option style={{ color: color37 }} label='Iso Cup 8mm' value='37'>
              Iso Cup 8mm
            </option>

            <option style={{ color: color38 }} label='Din Cup 4mm' value='38'>
              Din Cup 4mm
            </option>

            <option style={{ color: color39 }} label='Fisher Cup #1' value='39'>
              Fisher Cup #1
            </option>
            <option style={{ color: color40 }} label='Fisher Cup #2' value='40'>
              Fisher Cup #2
            </option>
            <option style={{ color: color41 }} label='Fisher Cup #3' value='41'>
              Fisher Cup #3
            </option>
            <option style={{ color: color42 }} label='Fisher Cup #4' value='42'>
              Fisher Cup #4
            </option>

            <option style={{ color: color43 }} label='Parlin Cup #1' value='43'>
              Parlin Cup #1
            </option>
            <option style={{ color: color44 }} label='Parlin Cup #2' value='44'>
              Parlin Cup #2
            </option>
            <option style={{ color: color45 }} label='Parlin Cup #3' value='45'>
              Parlin Cup #3
            </option>
            <option style={{ color: color46 }} label='Parlin Cup #4' value='46'>
              Parlin Cup #4
            </option>
          </CupSelector>
        </form>
        <Version>Version: 1.0.2</Version>

        <Gardco
          href={'https://www.gardco.com/viscosity.cfm'}
          target='_blank'
          rel='noopener noreferrer'
        >
          www.gardco.com
        </Gardco>
        <div style={{ margin: '2px auto', textAlign: 'center' }}>
          <img
            src={'https://i.postimg.cc/Twm75WLV/Altana-logo.png'}
            style={{ width: '150px', height: '100%' }}
            alt={'altana logo'}
          />
        </div>
      </MainContainer>
    );
  }
}


const green = '#009432';
const black = '#000000';


// ********** FIX STYLES **********
const MainContainer = styled.div`
  border-radius: 6px;
  border: 2px solid #487eb0;
  box-sizing: border-box;
  justify-content: center;
  margin: 110px auto;
  max-width: 80%;
  padding: 2rem 2rem 1rem 2rem;
  width: 500px;
`;

const InstructionSpan = styled.span`
  color: #d63031;
  font-weight: bold;
`;

const Calculation = styled.p`
  color: #000;
  font-size: 1.5rem;
  margin-top: 25px;
  text-align: center;
`;

const TextInputStyle = styled.input`
  background-color: #111;
  border: 1.5px solid #e3e3e3;
  color: #fff;
  font-size: 1.25rem;
  height: 45px;
  text-align: center;
  width: 100%;

  ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #ccc;
    opacity: 1;
  }
  :-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: #ccc;
    opacity: 1;
  }

  ::-ms-input-placeholder { /* Microsoft Edge */
    color: #ccc;
    opacity: 1;
  }
`;

const Error = styled.p`
  color: red;
  font-size: 1.75rem;
  font-weight: bold;
  text-align: center;
`;

const CupSelector = styled.select`
  align-self: center;
  background-color: #efefef;
  border-radius: 2px;
  font-size: 1.25rem;
  height: 2.5rem;
  justify-content: center;
  margin-top: 25px;
  width: 100%;

  > option {
    font-weight: bold;
  }
`;

const Version = styled.p`
  font-size: 0.85rem;
  margin-top: 50px;
  text-align: center;
`;

const Gardco = styled.a`
  color: #e60d2e;
  display: block;
  font-size: 1.125rem;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
`;

export default App;
