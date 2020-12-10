<!DOCTYPE html>
<html lang="en">
	<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="csrf-token" content="2WFSadwwqVDgGJ3ra6UZIhy3cuFLsWkX7OKvKqnR">

		<title>Laravel</title>

		<!-- Fonts -->
		<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap">

		<!-- Styles -->
		<link rel="stylesheet" href="css/app.css">

		<!-- Scripts -->
		<script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.7.3/dist/alpine.js" defer></script>
	</head>
<body>
	<div class="font-sans text-gray-900 antialiased">
		<div class="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
		<!-- <div>
		<a href="/">
		<svg class="w-16 h-16" viewbox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M11.395 44.428C4.557 40.198 0 32.632 0 24 0 10.745 10.745 0 24 0a23.891 23.891 0 0113.997 4.502c-.2 17.907-11.097 33.245-26.602 39.926z" fill="#6875F5"/>
		<path d="M14.134 45.885A23.914 23.914 0 0024 48c13.255 0 24-10.745 24-24 0-3.516-.756-6.856-2.115-9.866-4.659 15.143-16.608 27.092-31.75 31.751z" fill="#6875F5"/>
		</svg>
		</a>
		</div> -->

		<div class="outerloginForm w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg d-flex justify-content-between align-items-center">
			<div class="login-img-art w-100">
				<img src="forgot-pass.png" alt="logo">
			</div>
			<div class="form-sec w-100">
		<h2 class="form-heading">Reset your password</h2>
		<div class="mb-4 text-sm text-gray-600">
		Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one.
		</div>

		
		<form class="p-0" method="POST" action="{{ route('password.email') }}">
            @csrf

            <div class="block">
                <x-jet-label for="email" value="{{ __('Email') }}" />
                <x-jet-input id="email" class="block mt-1 w-full" type="email" name="email" :value="old('email')" required autofocus />
            </div>
			
			@if (session('status'))
				<div class="mb-4 font-medium text-sm text-green-600">
					{{ session('status') }}
				</div>
			@endif

			<x-jet-validation-errors class="mb-4" />

            <div class="flex items-center justify-end mt-4">
                <x-jet-button>
                    {{ __('Email Password Reset Link') }}
                </x-jet-button>
            </div>
        </form>
		
		</div>
		</div>
		</div>
	</div>
</body>
</html>
