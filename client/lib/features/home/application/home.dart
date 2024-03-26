import 'package:client/shared/utils/scaleConverter.dart';
import 'package:client/shared/widget/navbar/responsiveNavbar.dart';
import 'package:flutter/material.dart';

class Home extends StatefulWidget {
  const Home({super.key});

  @override
  State<Home> createState() => _HomeState();
}

class _HomeState extends State<Home> {
  late final heightConverter;
  late final widthConverter;

  @override
  void didChangeDependencies() {
    heightConverter =
        ScaleConverter(baseSize: MediaQuery.of(context).size.height);
    widthConverter =
        ScaleConverter(baseSize: MediaQuery.of(context).size.width);
    super.didChangeDependencies();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: PreferredSize(
        preferredSize: Size.fromHeight(heightConverter.getSize(2)),
        child: ResponsiveNavbar(context),
      ),
      body: SafeArea(
          child: SizedBox(
        height: MediaQuery.of(context).size.height,
        width: MediaQuery.of(context).size.width,
      )),
    );
  }
}
