import 'package:client/goRoutes.dart';
import 'package:client/shared/provider/navbar.provider.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:provider/provider.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MultiProvider(
      providers: [
        ChangeNotifierProvider(
          create: (context) => NavProvider(),
        )
      ],
      child: MaterialApp.router(
        scrollBehavior: const ScrollBehavior().copyWith(scrollbars: false),
        title: 'Shop Stream',
        debugShowCheckedModeBanner: false,
        theme: ThemeData(textTheme: GoogleFonts.varelaRoundTextTheme()),
        routerConfig: goRouter,
      ),
    );
  }
}
