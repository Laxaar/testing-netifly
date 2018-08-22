# Localization

This application completely supports localization. Under the hood, we are using _react-redux-localize plug-in_.

## Architecture

Localization is configured under the redux/third-party/localization folder.

1. Supported languages can be defined under config.js file in this folder.
2. Different languages can be translated under js/config/translations folder in _json_ format. Each translation is an array of strings. The order of strings should be the same as the order of languages defined in the first point.

