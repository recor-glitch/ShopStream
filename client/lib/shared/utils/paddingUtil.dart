import 'package:flutter/material.dart';

class PaddingUtils {
  static EdgeInsets getSmallPadding(BuildContext context) {
    return const EdgeInsets.symmetric(
      horizontal: 8.0,
      vertical: 4.0,
    ); // Adjust values as needed
  }

  static EdgeInsets getMediumPadding(BuildContext context) {
    return const EdgeInsets.symmetric(
      horizontal: 16.0,
      vertical: 8.0,
    ); // Adjust values as needed
  }

  static EdgeInsets getLargePadding(BuildContext context) {
    return const EdgeInsets.symmetric(
      horizontal: 24.0,
      vertical: 12.0,
    ); // Adjust values as needed
  }

  static EdgeInsets onlyTop(double top) {
    return EdgeInsets.only(top: top);
  }

  static EdgeInsets onlyBottom(double bottom) {
    return EdgeInsets.only(bottom: bottom);
  }

  static EdgeInsets onlyLeft(double left) {
    return EdgeInsets.only(left: left);
  }

  static EdgeInsets onlyRight(double right) {
    return EdgeInsets.only(right: right);
  }

  static EdgeInsets all(double value) {
    return EdgeInsets.all(value);
  }

  static EdgeInsetsDirectional fromDirectional(
      {double start = 0.0,
      double top = 0.0,
      double end = 0.0,
      double bottom = 0.0}) {
    return EdgeInsetsDirectional.only(
      top: top,
      bottom: bottom,
      start: start,
      end: end,
    );
  }
}
