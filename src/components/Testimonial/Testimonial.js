<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Testimonials</title>
    <style>
        /* Add some basic styling for testimonials */
        .testimonial-container {
            max-width: 600px;
            margin: auto;
            text-align: center;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 8px;
            margin-top: 50px;
        }

        .testimonial-text {
            font-style: italic;
            margin-bottom: 10px;
        }

        .testimonial-author {
            font-weight: bold;
        }
    </style>
</head>
<body>

    <div class="testimonial-container" id="testimonialContainer">
        <p class="testimonial-text" id="testimonialText">"This is an amazing product! I love it."</p>
        <p class="testimonial-author" id="testimonialAuthor">- John Doe</p>
    </div>

    <script>
        // You can add more testimonials to this array
        const testimonials = [
            {
                text: "This is an amazing product! I love it.",
                author: "John Doe"
            },
            {
                text: "The service exceeded my expectations. Highly recommended.",
                author: "Jane Smith"
            },
            // Add more testimonials as needed
        ];

        // Function to display a random testimonial
        function displayRandomTestimonial() {
            const randomIndex = Math.floor(Math.random() * testimonials.length);
            const testimonial = testimonials[randomIndex];

            // Update the HTML with the new testimonial
            document.getElementById("testimonialText").innerText = `"${testimonial.text}"`;
            document.getElementById("testimonialAuthor").innerText = ` - ${testimonial.author}`;
        }

        // Display an initial testimonial when the page loads
        displayRandomTestimonial();

        // You can trigger the display of a new testimonial in response to a button click or other events
        // For example, you can add a button and call displayRandomTestimonial() when the button is clicked.
    </script>

</body>
</html>
