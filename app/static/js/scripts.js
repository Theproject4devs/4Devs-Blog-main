        // Sua função toggleDisplaySignUp
        function toggleDisplaySignUp() {
            var formSignUp = document.getElementById('fncSignup');
            var formSignIn = document.getElementById('fncSignin');
            formSignUp.style.display = 'flex';
            formSignIn.style.display = 'none';
        }

        // Sua função toggleDisplaySignIn
        function toggleDisplaySignIn() {
            var formSignUp = document.getElementById('fncSignup');
            var formSignIn = document.getElementById('fncSignin');
            formSignUp.style.display = 'none';
            formSignIn.style.display = 'flex';
        }