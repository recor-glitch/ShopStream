import 'package:client/features/home/application/home.dart';
import 'package:client/features/playground/application/playground.dart';
import 'package:go_router/go_router.dart';

final goRouter = GoRouter(initialLocation: '/', routes: [
  GoRoute(
    path: '/',
    builder: (context, state) => const Home(),
  ),
  GoRoute(
    path: '/playground',
    builder: (context, state) => const Playground(),
  ),
]);
