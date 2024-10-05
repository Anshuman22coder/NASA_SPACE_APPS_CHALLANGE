<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Globe Trotters</title>
    <style>
        /* Body Style with Animated Gradient Background */
        body {
            margin: 0;
            padding: 0;
            font-family: 'Arial', sans-serif;
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background: linear-gradient(45deg, #00b3ff, #ff00e6, #ff9933);
            background-size: 600% 600%;
            animation: gradientAnimation 15s ease infinite;
        }

        @keyframes gradientAnimation {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }

        /* Navbar Styling */
        nav {
            width: 100%;
            background-color: rgba(18, 52, 73, 0.8);
            padding: 15px 0;
            position: absolute;
            top: 0;
            display: flex;
            justify-content: space-around;
            align-items: center;
        }

        nav ul {
            list-style-type: none;
            display: flex;
            margin: 0;
            padding: 0;
        }

        nav ul li {
            margin-right: 20px;
        }

        nav ul li a {
            text-decoration: none;
            font-weight: bold;
            color: white;
            font-size: 16px;
            transition: color 0.3s ease;
        }

        nav ul li a:hover {
            color: #00b3ff;
        }

        /* Central Container */
        .center-container {
            text-align: center;
            margin-top: 100px;
        }

        /* Glowing Text Effect */
        .globe-trotters-title {
            font-size: 64px;
            font-weight: bold;
            color: #fff;
            letter-spacing: 4px;
            text-transform: uppercase;
            text-shadow: 0 0 20px rgba(255, 255, 255, 0.8), 
                         0 0 30px rgba(255, 0, 255, 0.8), 
                         0 0 40px rgba(0, 123, 255, 0.8),
                         0 0 50px rgba(255, 255, 0, 0.8);
            animation: glowAnimation 2s ease-in-out infinite alternate;
        }

        @keyframes glowAnimation {
            from {
                text-shadow: 0 0 20px rgba(255, 255, 255, 0.8),
                             0 0 30px rgba(255, 0, 255, 0.8),
                             0 0 40px rgba(0, 123, 255, 0.8),
                             0 0 50px rgba(255, 255, 0, 0.8);
            }
            to {
                text-shadow: 0 0 30px rgba(255, 255, 255, 1),
                             0 0 40px rgba(255, 0, 255, 1),
                             0 0 50px rgba(0, 123, 255, 1),
                             0 0 60px rgba(255, 255, 0, 1);
            }
        }

        /* Button Styling */
        .explore-btn {
            margin-top: 30px;
            padding: 15px 30px;
            font-size: 18px;
            font-weight: bold;
            color: #fff;
            background-color: rgba(255, 255, 255, 0.1);
            border: 2px solid #fff;
            border-radius: 50px;
            text-transform: uppercase;
            letter-spacing: 2px;
            cursor: pointer;
            transition: all 0.3s ease-in-out;
        }

        /* Button Hover Effect */
        .explore-btn:hover {
            background-color: #fff;
            color: #000;
            transform: scale(1.1);
            box-shadow: 0 0 30px rgba(255, 255, 255, 0.5), 0 0 40px rgba(0, 123, 255, 0.8);
        }

    </style>
</head>
<body>
    <!-- Navbar -->
    <nav>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="/about.html">About</a></li>
            <li><a href="/login.html">Login</a></li>
            <li><a href="/signUp.html">Sign Up</a></li>
        
        </ul>
    </nav>

    <!-- Main Section with Title and Button -->
    <div class="center-container">
        <h1 class="globe-trotters-title">Globe Trotters</h1>
        <button class="explore-btn" id="login">Explore the World</button>
    </div>

    <script>
        document.getElementById("login").addEventListener('click', function() {
            window.location.href = '/login.html';
        });
    </script>
</body>
</html>
