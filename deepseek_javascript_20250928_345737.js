const exercises = {
    'leg_press': {
        name: 'Leg Press',
        description: '45-degree leg press machine',
        angle: 45,
        sled_weight: 25,
        type: 'machine',
        tips: [
            'Keep lower back flat against the pad',
            'Control the descent - don\'t let weight drop quickly',
            'Don\'t lock knees at the top of movement',
            'Focus on pushing through heels'
        ]
    },
    'leg_extension': {
        name: 'Leg Extension',
        description: 'Seated leg extension machine',
        angle: 0,
        sled_weight: 10,
        type: 'machine',
        tips: [
            'Avoid using momentum - controlled movements',
            'Squeeze quads at the top',
            'Don\'t hyperextend knees',
            'Adjust pad to sit on ankle, not shin'
        ]
    },
    'barbell_squat': {
        name: 'Barbell Squat',
        description: 'Standard barbell back squat',
        angle: 90,
        type: 'free_weight',
        tips: [
            'Keep chest up and back straight',
            'Depth to parallel or below',
            'Knees should track over toes',
            'Brace core throughout movement'
        ]
    },
    'hack_squat': {
        name: 'Hack Squat',
        description: '45-degree hack squat machine',
        angle: 45,
        sled_weight: 20,
        type: 'machine',
        tips: [
            'Shoulders firmly against pads',
            'Feet position determines muscle emphasis',
            'Control descent, explosive ascent',
            'Don\'t bounce at bottom'
        ]
    },
    'bench_press': {
        name: 'Bench Press',
        description: 'Flat barbell bench press',
        angle: 0,
        type: 'free_weight',
        tips: [
            'Retract shoulder blades',
            'Bar path should be diagonal, not straight',
            'Drive through heels and squeeze glutes',
            'Touch chest lightly, don\'t bounce'
        ]
    },
    'incline_bench': {
        name: 'Incline Bench Press',
        description: 'Incline barbell bench press (30°)',
        angle: 30,
        type: 'free_weight',
        tips: [
            '30-45 degree bench angle',
            'Targets upper chest more',
            'Bar to upper chest/clavicle',
            'Slightly narrower grip than flat bench'
        ]
    },
    'pec_dec': {
        name: 'Pec-Dec Fly',
        description: 'Butterfly/pec-dec machine',
        angle: 0,
        sled_weight: 5,
        type: 'machine',
        tips: [
            'Keep slight bend in elbows',
            'Squeeze chest at peak contraction',
            'Don\'t use too much weight',
            'Control negative portion'
        ]
    },
    'cable_crossover': {
        name: 'Cable Crossover',
        description: 'Cable crossover chest fly',
        angle: 45,
        type: 'cable',
        tips: [
            'Slight forward lean',
            'Cross hands at bottom for extra squeeze',
            'Control the stretch at top',
            'Focus on chest mind-muscle connection'
        ]
    },
    'lat_pulldown': {
        name: 'Lat Pulldown',
        description: 'Vertical lat pulldown',
        angle: 90,
        type: 'cable',
        tips: [
            'Pull to chest, not behind neck',
            'Lean back slightly (not too much)',
            'Drive elbows down and back',
            'Squeeze lats at bottom'
        ]
    },
    'seated_row': {
        name: 'Seated Cable Row',
        description: 'Horizontal seated cable row',
        angle: 0,
        type: 'cable',
        tips: [
            'Keep chest up, don\'t round back',
            'Pull to lower chest/upper abs',
            'Squeeze shoulder blades together',
            'Control the stretch forward'
        ]
    },
    'deadlift_standard': {
        name: 'Standard Deadlift',
        description: 'Conventional deadlift',
        angle: 90,
        type: 'free_weight',
        tips: [
            'Neutral spine throughout',
            'Bar close to body - scrapes shins',
            'Push through whole foot, not toes',
            'Hips and shoulders rise together'
        ]
    },
    'deadlift_sumo': {
        name: 'Sumo Deadlift',
        description: 'Sumo stance deadlift',
        angle: 45,
        type: 'free_weight',
        tips: [
            'Wider stance reduces range of motion',
            'More quad dominant than conventional',
            'Keep chest up, back straight',
            'Knees track over feet'
        ]
    },
    'military_press': {
        name: 'Military Press',
        description: 'Overhead barbell press',
        angle: 90,
        type: 'free_weight',
        tips: [
            'Brace core tightly',
            'Don\'t excessively arch lower back',
            'Bar path should be straight up',
            'Full range of motion - lockout overhead'
        ]
    },
    'shoulder_press_machine': {
        name: 'Shoulder Press Machine',
        description: 'Seated shoulder press machine',
        angle: 80,
        sled_weight: 10,
        type: 'machine',
        tips: [
            'Adjust seat so handles are at shoulder level',
            'Keep back against pad',
            'Don\'t lock elbows at top',
            'Control negative portion'
        ]
    },
    'lateral_raise': {
        name: 'Lateral Raise',
        description: 'Dumbbell lateral raise',
        angle: 90,
        type: 'free_weight',
        tips: [
            'Slight bend in elbows',
            'Raise to shoulder level, not higher',
            'Lead with elbows, not hands',
            'Control the descent - don\'t drop'
        ]
    },
    'front_raise': {
        name: 'Front Raise',
        description: 'Dumbbell front raise',
        angle: 90,
        type: 'free_weight',
        tips: [
            'Alternate arms or raise together',
            'Raise to eye level',
            'Keep core tight to prevent leaning back',
            'Focus on deltoid contraction'
        ]
    }
};

function updateExerciseInfo() {
    const exerciseSelect = document.getElementById('exercise');
    const exerciseInfo = document.getElementById('exercise-info');
    const description = document.getElementById('exercise-description');
    const angle = document.getElementById('exercise-angle');
    const sled = document.getElementById('exercise-sled');
    
    const selectedExercise = exerciseSelect.value;
    
    if (selectedExercise && exercises[selectedExercise]) {
        const exercise = exercises[selectedExercise];
        
        description.textContent = exercise.description;
        angle.textContent = `Machine Angle: ${exercise.angle}°`;
        
        if (exercise.sled_weight) {
            sled.textContent = `Sled Weight: ${exercise.sled_weight} kg`;
        } else {
            sled.textContent = 'Sled Weight: None (Free Weight)';
        }
        
        exerciseInfo.style.display = 'block';
    } else {
        exerciseInfo.style.display = 'none';
    }
}

function calculateForce() {
    const exerciseSelect = document.getElementById('exercise');
    const weightInput = document.getElementById('weight');
    const results = document.getElementById('results');
    const resultExercise = document.getElementById('result-exercise');
    const resultLoaded = document.getElementById('result-loaded');
    const resultTotal = document.getElementById('result-total');
    const resultActual = document.getElementById('result-actual');
    const exerciseTips = document.getElementById('exercise-tips');
    
    const selectedExercise = exerciseSelect.value;
    const weight = parseFloat(weightInput.value);
    
    if (!selectedExercise) {
        alert('Please select an exercise!');
        return;
    }
    
    if (!weight || weight <= 0) {
        alert('Please enter a valid weight!');
        return;
    }
    
    const exercise = exercises[selectedExercise];
    const angleRad = exercise.angle * (Math.PI / 180);
    
    let totalResistance = weight;
    let actualForce;
    
    if (exercise.type === 'machine') {
        totalResistance = weight + (exercise.sled_weight || 0);
        actualForce = totalResistance * Math.sin(angleRad);
    } else if (exercise.type === 'cable') {
        actualForce = weight * Math.sin(angleRad);
        if (selectedExercise === 'cable_crossover') {
            actualForce *= 2; // Both arms
        }
    } else {
        // Free weights
        actualForce = weight;
        
        // Special cases for free weights with mechanical advantage
        if (selectedExercise === 'lateral_raise') {
            actualForce = weight * 0.6;
        } else if (selectedExercise === 'front_raise') {
            actualForce = weight * 0.7;
        } else if (selectedExercise === 'deadlift_sumo') {
            actualForce = weight * 0.9;
        }
    }
    
    // Update results
    resultExercise.textContent = exercise.name;
    resultLoaded.textContent = `${weight} kg`;
    resultTotal.textContent = `${totalResistance.toFixed(1)} kg`;
    resultActual.textContent = `${actualForce.toFixed(1)} kg`;
    
    // Show tips
    exerciseTips.innerHTML = `<h4>Exercise Tips:</h4><ul>${exercise.tips.map(tip => `<li>${tip}</li>`).join('')}</ul>`;
    
    // Show results
    results.style.display = 'block';
    
    // Scroll to results
    results.scrollIntoView({ behavior: 'smooth' });
}