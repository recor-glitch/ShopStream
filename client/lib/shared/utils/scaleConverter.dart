class ScaleConverter {
  final double
      baseSize; // Base size to use for scaling (e.g., 100.0 for pixels)
  ScaleConverter({required this.baseSize});

  double getSize(int scale) {
    if (scale < 1 || scale > 10) {
      throw ArgumentError('Scale value must be an integer between 1 and 10');
    }

    // Adjust the scaling factor as needed (here, linear scaling)
    final double scalingFactor =
        (scale - 1) / 9; // Normalize to 0-1 range for smoother scaling
    return baseSize * scalingFactor;
  }
}
