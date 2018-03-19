'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _compose = require('recompose/compose');

var _compose2 = _interopRequireDefault(_compose);

var _withState = require('recompose/withState');

var _withState2 = _interopRequireDefault(_withState);

var _TextField = require('material-ui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _transformers = require('../transformers');

var _PickerDialog = require('./PickerDialog');

var _PickerDialog2 = _interopRequireDefault(_PickerDialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ColorPicker = function ColorPicker(_ref) {
  var _onChange = _ref.onChange,
      convert = _ref.convert,
      value = _ref.value,
      name = _ref.name,
      id = _ref.id,
      hintText = _ref.hintText,
      placeholder = _ref.placeholder,
      floatingLabelText = _ref.floatingLabelText,
      label = _ref.label,
      TextFieldProps = _ref.TextFieldProps,
      showPicker = _ref.showPicker,
      setShowPicker = _ref.setShowPicker;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_TextField2.default, {
      name: name,
      id: id,
      value: value,
      label: floatingLabelText || label,
      placeholder: hintText || placeholder,
      onClick: function onClick() {
        return setShowPicker(true);
      },
      onChange: function onChange(e) {
        _onChange(e.target.value);
      },
      InputProps: { style: { color: value } }
    }),
    showPicker && _react2.default.createElement(_PickerDialog2.default, {
      value: value,
      onClick: function onClick() {
        setShowPicker(false);
        _onChange(value);
      },
      onChange: function onChange(c) {
        _onChange(_transformers.converters[convert](c));
      }
    })
  );
};

ColorPicker.propTypes = {
  value: _react.PropTypes.string,
  onChange: _react.PropTypes.func,
  convert: _react.PropTypes.oneOf(Object.keys(_transformers.converters))
};

ColorPicker.defaultProps = {
  convert: _transformers.DEFAULT_CONVERTER
};

var makeColorPicker = (0, _compose2.default)((0, _withState2.default)('showPicker', 'setShowPicker', false));

exports.default = makeColorPicker(ColorPicker);
module.exports = exports['default'];