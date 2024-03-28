import 'package:flutter/material.dart';

class NavProvider with ChangeNotifier {
  bool hasHovered = false;
  bool hasHoveredContent = false;

  void toggleHovered({required bool isHovered}) {
    hasHovered = isHovered;
    notifyListeners();
  }

  void toggleHoveredContent({required bool isHovered}) {
    hasHoveredContent = isHovered;
    notifyListeners();
  }
}
