// ============================================================================
// HEALTH & FITNESS PLANNER - BACKEND LOGIC
// ============================================================================

const WORKOUT_28_COMBINATIONS = {
    "combination_1": {
        "Day 1": "Light cardio 20 mins, Stretching 10 mins\nFocus on low-impact exercises\nHydrate well before and after",
        "Day 2": "Walking 30 mins, Yoga 15 mins\nInclude breathing exercises\nMonitor heart rate",
        "Day 3": "Rest day with light stretching\nGentle mobility exercises\nFocus on recovery",
        "Day 4": "Resistance bands 15 mins, Walking 20 mins\nUse light resistance\nMaintain proper form",
        "Day 5": "Swimming or water exercises 25 mins\nWater temperature should be comfortable\nNo intense movements",
        "Day 6": "Yoga for flexibility 20 mins\nHold each stretch for 20-30 seconds\nAvoid overstretching",
        "Day 7": "Light walk 30 mins, Breathing exercises\nPractice deep breathing\nCool down properly"
    },
    "combination_2": {
        "Day 1": "Water aerobics 25 mins\nUse pool for low impact\nAvoid jumping movements",
        "Day 2": "Chair exercises 20 mins\nFocus on seated movements\nSupport joints properly",
        "Day 3": "Rest day with gentle stretching\nLight range of motion\nListen to your body",
        "Day 4": "Walking in pool 20 mins\nUse water for buoyancy\nGo at comfortable pace",
        "Day 5": "Upper body stretches 15 mins\nGentle arm and shoulder movements\nAvoid strain",
        "Day 6": "Light cycling 20 mins\nStationary bike recommended\nAdjust resistance low",
        "Day 7": "Rest day with breathing exercises\nFocus on relaxation\nPractice mindfulness"
    },
    "combination_3": {
        "Day 1": "Tai Chi 25 mins\nSlow controlled movements\nFocus on balance",
        "Day 2": "Gentle yoga 20 mins\nSupported poses only\nUse props as needed",
        "Day 3": "Walking 15 mins\nFlat surface only\nRest when needed",
        "Day 4": "Breathing exercises 15 mins\nDiaphragmatic breathing\nRelaxation focus",
        "Day 5": "Stretching 15 mins\nGentle static stretches\nNo bouncing",
        "Day 6": "Rest day\nComplete recovery\nLight walking only",
        "Day 7": "Meditation and light stretches\nMind-body connection\nGentle movement"
    },
    "combination_4": {
        "Day 1": "Walking 25 mins\nModerate pace\nProper footwear",
        "Day 2": "Strength training 20 mins\nLight weights only\nFocus on form",
        "Day 3": "Yoga 25 mins\nBalance poses\nCore engagement",
        "Day 4": "Cycling 30 mins\nModerate resistance\nConsistent pace",
        "Day 5": "Swimming 25 mins\nLap swimming\nTechnique focus",
        "Day 6": "HIIT 20 mins\nModified version\nAdequate rest",
        "Day 7": "Active recovery\nLight activity\nMobility work"
    }
};

// SIMPLIFIED DIET PLANS - FIXED
const DIET_28_COMBINATIONS = {
    "combination_1": {
        "Weight Loss": {
            "Day 1": {
                "Breakfast": "Oatmeal with berries, Green tea, Almonds",
                "Lunch": "Grilled chicken salad, Whole wheat bread, Olive oil dressing",
                "Dinner": "Baked fish, Steamed vegetables, Quinoa",
                "Snack": "Apple, Walnuts"
            },
            "Day 2": {
                "Breakfast": "Greek yogurt, Flax seeds, Honey, Blueberries",
                "Lunch": "Lentil soup, Mixed greens, Whole grain crackers",
                "Dinner": "Turkey meatballs, Zucchini noodles, Tomato sauce",
                "Snack": "Pear, Almonds"
            },
            "Day 3": {
                "Breakfast": "Scrambled eggs, Spinach, Whole wheat toast, Avocado",
                "Lunch": "Chickpea salad, Cucumber, Tomatoes, Feta cheese",
                "Dinner": "Baked chicken, Broccoli, Brown rice, Garlic",
                "Snack": "Orange, Pumpkin seeds"
            },
            "Day 4": {
                "Breakfast": "Cottage cheese, Blueberries, Cinnamon, Chia seeds",
                "Lunch": "Tuna salad, Whole grain bread, Lettuce, Tomato",
                "Dinner": "Lean beef stir-fry, Bell peppers, Brown rice, Soy sauce",
                "Snack": "Peach, Cashews"
            },
            "Day 5": {
                "Breakfast": "Smoothie with spinach, Banana, Protein powder, Almond milk",
                "Lunch": "Vegetable soup, Whole wheat roll, Side salad",
                "Dinner": "Salmon, Asparagus, Sweet potato, Lemon",
                "Snack": "Grapes, Pistachios"
            },
            "Day 6": {
                "Breakfast": "Whole grain toast, Avocado, Poached eggs, Cherry tomatoes",
                "Lunch": "Chicken wrap with veggies, Hummus, Whole wheat tortilla",
                "Dinner": "Shrimp, Zucchini noodles, Pesto sauce, Parmesan",
                "Snack": "Plum, Sunflower seeds"
            },
            "Day 7": {
                "Breakfast": "Protein pancakes, Berries, Maple syrup, Greek yogurt",
                "Lunch": "Egg salad, Mixed vegetables, Whole grain crackers",
                "Dinner": "Lean pork, Cauliflower rice, Green beans, Herbs",
                "Snack": "Melon, Pecans"
            }
        },
        "Maintenance": {
            "Day 1": {
                "Breakfast": "Oatmeal with banana, Milk, Walnuts, Cinnamon",
                "Lunch": "Chicken sandwich, Side salad, Avocado, Whole wheat bread",
                "Dinner": "Beef stew, Potatoes, Carrots, Onions",
                "Snack": "Yogurt, Granola, Honey"
            },
            "Day 2": {
                "Breakfast": "Eggs, Toast, Orange juice, Cheese",
                "Lunch": "Pasta with vegetables, Garlic bread, Parmesan cheese",
                "Dinner": "Roast chicken, Mixed veggies, Mashed potatoes, Gravy",
                "Snack": "Cheese, Crackers, Grapes"
            },
            "Day 3": {
                "Breakfast": "Pancakes, Syrup, Bacon, Fruit salad",
                "Lunch": "Burrito bowl, Rice, Beans, Salsa, Guacamole",
                "Dinner": "Pork chops, Applesauce, Green beans, Dinner rolls",
                "Snack": "Protein bar, Apple"
            },
            "Day 4": {
                "Breakfast": "Bagel, Cream cheese, Smoked salmon, Onions",
                "Lunch": "Turkey club sandwich, Soup, Pickles, Chips",
                "Dinner": "Meatloaf, Mashed potatoes, Corn, Bread",
                "Snack": "Trail mix, Dried fruit"
            },
            "Day 5": {
                "Breakfast": "French toast, Berries, Whipped cream, Sausage",
                "Lunch": "Pizza, Salad, Garlic knots, Parmesan",
                "Dinner": "Spaghetti, Meatballs, Garlic bread, Salad",
                "Snack": "Ice cream, Cookies"
            },
            "Day 6": {
                "Breakfast": "Breakfast burrito, Salsa, Avocado, Sour cream",
                "Lunch": "Chicken Caesar salad, Croutons, Parmesan, Dressing",
                "Dinner": "Fish tacos, Coleslaw, Rice, Beans",
                "Snack": "Popcorn, Chocolate"
            },
            "Day 7": {
                "Breakfast": "Quiche, Fruit salad, Bacon, Toast",
                "Lunch": "Steak salad, Blue cheese, Walnuts, Vinaigrette",
                "Dinner": "Roast beef, Yorkshire pudding, Vegetables, Gravy",
                "Snack": "Cheesecake, Berries"
            }
        },
        "Weight Gain": {
            "Day 1": {
                "Breakfast": "Oatmeal with nuts and honey, Whole milk, Banana, Peanut butter",
                "Lunch": "Chicken rice bowl, Avocado, Cheese, Sour cream",
                "Dinner": "Steak, Mashed potatoes, Creamed spinach, Butter",
                "Snack": "Protein shake, Banana, Peanut butter"
            },
            "Day 2": {
                "Breakfast": "4-egg omelette, Toast with butter, Cheese, Ham",
                "Lunch": "Burger with cheese, Sweet potato fries, Bacon, Avocado",
                "Dinner": "Pork chops, Mac and cheese, Green beans, Butter",
                "Snack": "Greek yogurt with honey, Granola, Nuts"
            },
            "Day 3": {
                "Breakfast": "Breakfast sandwich, Hash browns, Cheese, Sausage",
                "Lunch": "Chicken alfredo pasta, Garlic bread, Parmesan, Cream sauce",
                "Dinner": "Meat lovers pizza, Breadsticks, Ranch dressing",
                "Snack": "Mass gainer shake, Banana"
            },
            "Day 4": {
                "Breakfast": "Protein pancakes, Syrup, Butter, Bacon, Eggs",
                "Lunch": "BBQ ribs, Coleslaw, Cornbread, Baked beans",
                "Dinner": "Fried chicken, Mashed potatoes, Gravy, Biscuits",
                "Snack": "Peanut butter sandwich, Milk"
            },
            "Day 5": {
                "Breakfast": "Steak and eggs, Toast, Hash browns, Butter",
                "Lunch": "Philly cheesesteak, Fries, Cheese sauce, Onions",
                "Dinner": "Lasagna, Garlic bread, Salad, Cheese",
                "Snack": "Cottage cheese, Fruit, Honey"
            },
            "Day 6": {
                "Breakfast": "French toast casserole, Syrup, Sausage, Whipped cream",
                "Lunch": "Burrito, Rice, Beans, Cheese, Guacamole",
                "Dinner": "Prime rib, Potatoes au gratin, Vegetables, Butter",
                "Snack": "Protein bars, Nuts"
            },
            "Day 7": {
                "Breakfast": "Country breakfast: Eggs, Bacon, Sausage, Biscuits, Gravy",
                "Lunch": "Pastrami sandwich, Chips, Pickles, Potato salad",
                "Dinner": "Beef Wellington, Roasted potatoes, Vegetables, Sauce",
                "Snack": "Milkshake, Cookies"
            }
        }
    },
    // Add other combinations similarly
    "combination_2": {
        "Weight Loss": {
            "Day 1": {
                "Breakfast": "Berry smoothie, Almond milk, Spinach, Chia seeds",
                "Lunch": "Quinoa salad, Grilled vegetables, Lemon dressing, Chickpeas",
                "Dinner": "Baked cod, Steamed greens, Lemon, Herbs",
                "Snack": "Carrot sticks, Hummus, Cucumber"
            },
            "Day 2": {
                "Breakfast": "Chia pudding, Coconut flakes, Almonds, Berries",
                "Lunch": "Turkey lettuce wraps, Side salad, Avocado, Tomato",
                "Dinner": "Lentil curry, Brown rice, Spinach, Coconut milk",
                "Snack": "Celery, Peanut butter, Raisins"
            },
            "Day 3": {
                "Breakfast": "Greek yogurt, Honey, Walnuts, Cinnamon, Apple",
                "Lunch": "Chicken vegetable soup, Whole grain bread, Side salad",
                "Dinner": "Baked tilapia, Roasted vegetables, Quinoa, Lemon",
                "Snack": "Orange, Almonds, Dark chocolate"
            },
            "Day 4": {
                "Breakfast": "Oatmeal, Berries, Almond butter, Flax seeds",
                "Lunch": "Tuna salad, Mixed greens, Olive oil, Vinegar",
                "Dinner": "Chicken stir-fry, Vegetables, Brown rice, Ginger",
                "Snack": "Pear, Cheese, Whole grain crackers"
            },
            "Day 5": {
                "Breakfast": "Scrambled tofu, Vegetables, Whole wheat toast, Avocado",
                "Lunch": "Lentil soup, Salad, Whole grain roll, Olive oil",
                "Dinner": "Baked salmon, Asparagus, Sweet potato, Dill",
                "Snack": "Apple, Peanut butter, Cinnamon"
            },
            "Day 6": {
                "Breakfast": "Smoothie bowl, Granola, Berries, Coconut, Honey",
                "Lunch": "Chickpea salad sandwich, Whole wheat bread, Lettuce",
                "Dinner": "Turkey meatballs, Zucchini noodles, Tomato sauce",
                "Snack": "Yogurt, Berries, Granola"
            },
            "Day 7": {
                "Breakfast": "Egg white omelette, Vegetables, Whole wheat toast",
                "Lunch": "Grilled chicken, Quinoa salad, Vegetables, Lemon",
                "Dinner": "Baked white fish, Steamed vegetables, Brown rice",
                "Snack": "Cottage cheese, Pineapple, Walnuts"
            }
        },
        "Maintenance": {
            "Day 1": {
                "Breakfast": "Whole grain cereal, Milk, Fruit, Nuts, Honey",
                "Lunch": "Chicken pasta salad, Bread, Olive oil, Vegetables",
                "Dinner": "Fish cakes, Roasted potatoes, Tartar sauce, Lemon",
                "Snack": "Fruit salad, Nuts, Yogurt"
            },
            "Day 2": {
                "Breakfast": "Breakfast sandwich, Cheese, Ham, Whole wheat English muffin",
                "Lunch": "Beef and barley soup, Bread, Butter, Salad",
                "Dinner": "Chicken pot pie, Mashed potatoes, Vegetables, Gravy",
                "Snack": "Cheese and crackers, Apple, Nuts"
            },
            "Day 3": {
                "Breakfast": "Pancakes, Maple syrup, Berries, Yogurt, Bacon",
                "Lunch": "Turkey club sandwich, Soup, Chips, Pickle",
                "Dinner": "Meatballs, Spaghetti, Garlic bread, Parmesan",
                "Snack": "Ice cream, Chocolate sauce, Nuts"
            },
            "Day 4": {
                "Breakfast": "Bagel, Cream cheese, Tomato, Onion, Smoked salmon",
                "Lunch": "Chicken quesadilla, Salsa, Guacamole, Sour cream",
                "Dinner": "Pork tenderloin, Roasted vegetables, Potatoes, Sauce",
                "Snack": "Popcorn, Chocolate, Nuts"
            },
            "Day 5": {
                "Breakfast": "French toast, Syrup, Powdered sugar, Sausage",
                "Lunch": "Steak salad, Blue cheese, Walnuts, Balsamic",
                "Dinner": "Shrimp scampi, Pasta, Garlic bread, Salad",
                "Snack": "Cheesecake, Berry compote"
            },
            "Day 6": {
                "Breakfast": "Breakfast burrito, Beans, Cheese, Salsa, Avocado",
                "Lunch": "Reuben sandwich, Soup, Potato chips, Pickle",
                "Dinner": "Roast chicken, Stuffing, Gravy, Vegetables",
                "Snack": "Brownie, Ice cream, Nuts"
            },
            "Day 7": {
                "Breakfast": "Quiche Lorraine, Fruit salad, Bacon, Toast",
                "Lunch": "Beef stroganoff, Noodles, Sour cream, Mushrooms",
                "Dinner": "Lamb chops, Mint sauce, Roasted potatoes, Vegetables",
                "Snack": "Tiramisu, Coffee"
            }
        },
        "Weight Gain": {
            "Day 1": {
                "Breakfast": "Protein pancakes with syrup, Bacon, Eggs, Butter",
                "Lunch": "Meatball sub, Fries, Cheese, Marinara sauce",
                "Dinner": "Fried chicken, Coleslaw, Biscuits, Gravy",
                "Snack": "Milkshake, Cookies, Whipped cream"
            },
            "Day 2": {
                "Breakfast": "Steak and eggs, Hash browns, Toast, Butter",
                "Lunch": "Double cheeseburger, Onion rings, Bacon, Cheese",
                "Dinner": "BBQ ribs, Mac and cheese, Cornbread, Beans",
                "Snack": "Protein shake, Banana, Peanut butter, Oats"
            },
            "Day 3": {
                "Breakfast": "Breakfast skillet: Potatoes, Eggs, Cheese, Sausage, Peppers",
                "Lunch": "Philly cheesesteak, Fries, Cheese whiz, Onions",
                "Dinner": "Lasagna, Garlic bread, Salad, Cheese",
                "Snack": "Greek yogurt, Honey, Granola, Nuts"
            },
            "Day 4": {
                "Breakfast": "Pancakes, Sausage, Eggs, Hash browns, Syrup",
                "Lunch": "Fried chicken sandwich, Waffle fries, Coleslaw, Mayo",
                "Dinner": "Prime rib, Mashed potatoes, Creamed spinach, Butter",
                "Snack": "Peanut butter and jelly sandwich, Milk"
            },
            "Day 5": {
                "Breakfast": "Eggs Benedict, Hash browns, Bacon, Fruit",
                "Lunch": "Chicken alfredo pasta, Garlic bread, Parmesan",
                "Dinner": "Meat lovers pizza, Breadsticks, Ranch",
                "Snack": "Mass gainer shake, Banana, Nut butter"
            },
            "Day 6": {
                "Breakfast": "Country fried steak, Eggs, Biscuits, Gravy",
                "Lunch": "Reuben sandwich, Fries, Thousand island, Sauerkraut",
                "Dinner": "Beef Wellington, Roasted potatoes, Vegetables",
                "Snack": "Cheesecake, Caramel sauce, Nuts"
            },
            "Day 7": {
                "Breakfast": "Full English breakfast: Eggs, Bacon, Sausage, Beans, Toast",
                "Lunch": "Burger with everything, Sweet potato fries, Shake",
                "Dinner": "Rack of lamb, Potatoes au gratin, Vegetables",
                "Snack": "Protein bars, Nuts, Dried fruit"
            }
        }
    }
};

// ============================================================================
// CALCULATION FUNCTIONS
// ============================================================================

function calculateBMI(heightCm, weightKg) {
    const heightM = heightCm / 100;
    return (weightKg / (heightM * heightM)).toFixed(1);
}

function getBMICategory(bmi) {
    bmi = parseFloat(bmi);
    if (bmi < 18.5) return "Underweight";
    if (bmi <= 24.9) return "Normal";
    if (bmi <= 29.9) return "Overweight";
    return "Obese";
}

function calculateBMR(age, gender, heightCm, weightKg) {
    if (gender === 1) { // Male
        return Math.round((10 * weightKg) + (6.25 * heightCm) - (5 * age) + 5);
    } else { // Female
        return Math.round((10 * weightKg) + (6.25 * heightCm) - (5 * age) - 161);
    }
}

function getActivityMultiplier(activityScale) {
    const multipliers = {
        1: 1.2,
        2: 1.375,
        3: 1.55,
        4: 1.725,
        5: 1.9
    };
    return multipliers[activityScale] || 1.2;
}

function calculateDailyCalories(bmr, activityMultiplier, goal) {
    const maintenance = Math.round(bmr * activityMultiplier);
    switch(goal) {
        case 1: return maintenance - 500; // Weight Loss
        case 2: return maintenance; // Maintenance
        case 3: return maintenance + 500; // Weight Gain
        default: return maintenance;
    }
}

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

function getGoalName(goalNumber) {
    const goals = {1: "Weight Loss", 2: "Maintenance", 3: "Weight Gain"};
    return goals[goalNumber] || "Maintenance";
}

function getGenderName(genderNumber) {
    return genderNumber === 1 ? "Male" : "Female";
}

function cleanFoodList(foodString) {
    if (!foodString || !foodString.trim()) return [];
    return foodString.split(",")
        .map(food => food.trim().toLowerCase())
        .filter(food => food.length > 0);
}

function removeUnwantedFoods(meal, dislikedFoods, allergicFoods) {
    if (!meal) return "Doctor-approved alternative meal";
    
    let mealLower = meal.toLowerCase();
    let modifiedMeal = meal;
    
    [...dislikedFoods, ...allergicFoods].forEach(food => {
        if (food && mealLower.includes(food)) {
            modifiedMeal = modifiedMeal.replace(new RegExp(food, 'gi'), '');
            modifiedMeal = modifiedMeal.replace(/,,+/g, ',').replace(/\s+/g, ' ').trim();
            modifiedMeal = modifiedMeal.replace(/^,|,$/g, '').trim();
        }
    });
    
    return modifiedMeal || "Doctor-approved alternative meal";
}

function customizeDietPlan(dietPlan, dislikedFoods, allergicFoods) {
    const customized = {};
    Object.keys(dietPlan).forEach(day => {
        customized[day] = {};
        Object.keys(dietPlan[day]).forEach(meal => {
            customized[day][meal] = removeUnwantedFoods(
                dietPlan[day][meal], 
                dislikedFoods, 
                allergicFoods
            );
        });
    });
    return customized;
}

// ============================================================================
// MAIN APPLICATION LOGIC - FIXED
// ============================================================================

class HealthPlanner {
    constructor() {
        this.currentPlan = null;
        this.userData = null;
        this.initializeEventListeners();
    }
    
    initializeEventListeners() {
        // BMI Calculator Form
        const bmiForm = document.getElementById('bmiForm');
        if (bmiForm) {
            bmiForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.calculateBMISimple();
            });
        }
        
        // Comprehensive Health Plan Form - FIXED
        const healthForm = document.getElementById('healthForm');
        if (healthForm) {
            healthForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.generateComprehensivePlan();
            });
        }
        
        // Get Service Button
        const getServiceBtn = document.querySelector('.services-grid button');
        if (getServiceBtn) {
            getServiceBtn.addEventListener('click', () => {
                window.location.href = 'planner.html';
            });
        }
        
        // Sign In Form
        const signinForm = document.querySelector('.login-card form');
        if (signinForm) {
            signinForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleSignIn();
            });
        }
    }
    
    calculateBMISimple() {
        const height = parseFloat(document.getElementById('height_bmi').value);
        const weight = parseFloat(document.getElementById('weight_bmi').value);

        
        if (!height || !weight) {
            alert('Please enter both height and weight');
            return;
        }
        
        const bmi = calculateBMI(height, weight);
        const category = getBMICategory(bmi);
        
        document.getElementById('bmiResult').innerHTML = `
            <div class="result-card">
                <h3>Your BMI Results</h3>
                <p><strong>BMI:</strong> ${bmi}</p>
                <p><strong>Category:</strong> ${category}</p>
                <p><strong>Recommendation:</strong> ${this.getBMITips(category)}</p>
            </div>
        `;
        
        this.saveToHistory({ height, weight, bmi, category, date: new Date().toLocaleString() });
    }
    
    getBMITips(category) {
        const tips = {
            "Underweight": "Consider increasing calorie intake with nutrient-dense foods and strength training",
            "Normal": "Maintain your healthy lifestyle with balanced diet and regular exercise",
            "Overweight": "Focus on portion control, regular cardio, and strength training",
            "Obese": "Consult a healthcare provider, focus on gradual weight loss through diet and exercise"
        };
        return tips[category] || "Maintain a balanced diet and regular exercise routine";
    }
    
    generateComprehensivePlan() {
        // Collect all form data
        const userData = {
            name: document.getElementById('fullName').value,
            age: parseInt(document.getElementById('age').value),
            gender: parseInt(document.getElementById('gender').value),
            height: parseFloat(document.getElementById('height').value),
            weight: parseFloat(document.getElementById('weight').value),
            activity: parseInt(document.getElementById('activity').value),
            goal: parseInt(document.getElementById('goal').value),
            diseaseCombo: parseInt(document.getElementById('diseaseCombo').value),
            dislikedFoods: cleanFoodList(document.getElementById('dislikedFoods').value),
            allergies: cleanFoodList(document.getElementById('allergies').value)
        };
        
        if (!this.validateInputs(userData)) {
            return;
        }
        
        this.userData = userData;
        
        const bmi = calculateBMI(userData.height, userData.weight);
        const bmiCategory = getBMICategory(bmi);
        const bmr = calculateBMR(userData.age, userData.gender, userData.height, userData.weight);
        const activityMultiplier = getActivityMultiplier(userData.activity);
        const dailyCalories = calculateDailyCalories(bmr, activityMultiplier, userData.goal);
        
        const plan = this.generatePlan(userData, bmi, bmiCategory, bmr, dailyCalories);
        
        this.displayPlan(plan);
        
        localStorage.setItem('lastHealthPlan', JSON.stringify(plan));
    }
    
    validateInputs(data) {
        const errors = [];
        
        if (!data.name || data.name.length < 2) errors.push("Please enter a valid name");
        if (data.age < 1 || data.age > 120) errors.push("Age must be between 1 and 120");
        if (data.height < 50 || data.height > 250) errors.push("Height must be between 50 and 250 cm");
        if (data.weight < 10 || data.weight > 300) errors.push("Weight must be between 10 and 300 kg");
        
        if (errors.length > 0) {
            alert("Please fix the following errors:\n" + errors.join("\n"));
            return false;
        }
        return true;
    }
    
    generatePlan(userData, bmi, bmiCategory, bmr, dailyCalories) {
        const comboKey = `combination_${userData.diseaseCombo}`;
        const goalName = getGoalName(userData.goal);
        
        let workoutPlan = WORKOUT_28_COMBINATIONS[comboKey] || WORKOUT_28_COMBINATIONS.combination_1;
        
        let dietPlan = {};
        if (DIET_28_COMBINATIONS[comboKey] && DIET_28_COMBINATIONS[comboKey][goalName]) {
            dietPlan = DIET_28_COMBINATIONS[comboKey][goalName];
        } else {
            // Default diet plan if not found
            dietPlan = {
                "Day 1": {
                    "Breakfast": "Consult doctor for personalized plan",
                    "Lunch": "Consult doctor for personalized plan",
                    "Dinner": "Consult doctor for personalized plan",
                    "Snack": "Consult doctor for personalized plan"
                }
            };
        }
        
        dietPlan = customizeDietPlan(dietPlan, userData.dislikedFoods, userData.allergies);
        
        return {
            userInfo: {
                ...userData,
                genderName: getGenderName(userData.gender),
                goalName: goalName
            },
            metrics: {
                bmi: parseFloat(bmi),
                bmiCategory,
                bmr,
                dailyCalories,
                activityMultiplier: getActivityMultiplier(userData.activity)
            },
            workoutPlan,
            dietPlan,
            generatedAt: new Date().toLocaleString()
        };
    }
    
    displayPlan(plan) {
        const planContainer = document.getElementById('planResult');
        if (!planContainer) return;
        
        let planHTML = `
            <div class="plan-summary">
                <h2>Your Personalized Health & Fitness Plan</h2>
                <p class="generated-date">Generated on: ${plan.generatedAt}</p>
                
                <div class="user-details">
                    <h3>User Details</h3>
                    <div class="details-grid">
                        <div><strong>Name:</strong> ${plan.userInfo.name}</div>
                        <div><strong>Age:</strong> ${plan.userInfo.age}</div>
                        <div><strong>Gender:</strong> ${plan.userInfo.genderName}</div>
                        <div><strong>Height:</strong> ${plan.userInfo.height} cm</div>
                        <div><strong>Weight:</strong> ${plan.userInfo.weight} kg</div>
                        <div><strong>Goal:</strong> ${plan.userInfo.goalName}</div>
                    </div>
                </div>
                
                <div class="health-metrics">
                    <h3>Health Metrics</h3>
                    <div class="metrics-grid">
                        <div class="metric-card">
                            <h4>BMI</h4>
                            <p class="metric-value">${plan.metrics.bmi}</p>
                            <p class="metric-label">${plan.metrics.bmiCategory}</p>
                        </div>
                        <div class="metric-card">
                            <h4>BMR</h4>
                            <p class="metric-value">${plan.metrics.bmr}</p>
                            <p class="metric-label">calories/day</p>
                        </div>
                        <div class="metric-card">
                            <h4>Daily Calories</h4>
                            <p class="metric-value">${plan.metrics.dailyCalories}</p>
                            <p class="metric-label">calories/day</p>
                        </div>
                    </div>
                </div>
        `;
        
        // Workout Plan
        planHTML += `
            <div class="workout-plan">
                <h3>7-Day Workout Plan</h3>
        `;
        
        for (let day = 1; day <= 7; day++) {
            const dayKey = `Day ${day}`;
            if (plan.workoutPlan[dayKey]) {
                planHTML += `
                    <div class="day-plan">
                        <h4>${dayKey}</h4>
                        <p>${plan.workoutPlan[dayKey].replace(/\n/g, '<br>')}</p>
                    </div>
                `;
            }
        }
        
        planHTML += `</div>`;
        
        // Diet Plan - FIXED: Now it will always show
        planHTML += `
            <div class="diet-plan">
                <h3>7-Day Customized Diet Plan</h3>
                <p class="note">(Disliked and allergic foods have been removed)</p>
        `;
        
        for (let day = 1; day <= 7; day++) {
            const dayKey = `Day ${day}`;
            if (plan.dietPlan[dayKey]) {
                planHTML += `
                    <div class="day-diet">
                        <h4>${dayKey}</h4>
                        <div class="meals">
                            <p><strong>Breakfast:</strong> ${plan.dietPlan[dayKey].Breakfast}</p>
                            <p><strong>Lunch:</strong> ${plan.dietPlan[dayKey].Lunch}</p>
                            <p><strong>Dinner:</strong> ${plan.dietPlan[dayKey].Dinner}</p>
                            <p><strong>Snack:</strong> ${plan.dietPlan[dayKey].Snack}</p>
                        </div>
                    </div>
                `;
            } 
        }
        
        planHTML += `</div>`;
        
        planHTML += `
            <div class="plan-actions">
                <button onclick="healthPlanner.downloadPlan()" class="download-btn">Download Plan</button>
                <button onclick="healthPlanner.printPlan()" class="print-btn">Print Plan</button>
            </div>
            
            <div class="disclaimer">
                <h4>Important Notes:</h4>
                <ul>
                    <li>Consult with your doctor before starting any new plan</li>
                    <li>Stay hydrated throughout the day</li>
                    <li>Listen to your body and adjust as needed</li>
                    <li>Report any adverse reactions to your healthcare provider</li>
                </ul>
            </div>
        </div>
        `;
        
        planContainer.innerHTML = planHTML;
        planContainer.scrollIntoView({ behavior: 'smooth' });
    }
    
    downloadPlan() {
        if (!this.userData) {
            alert('No plan generated yet!');
            return;
        }
        
        const planData = localStorage.getItem('lastHealthPlan');
        if (!planData) {
            alert('No plan found to download');
            return;
        }
        
        const plan = JSON.parse(planData);
        let content = `PERSONALIZED HEALTH & FITNESS PLAN\n`;
        content += `Generated on: ${plan.generatedAt}\n`;
        content += `========================================\n\n`;
        
        content += `USER DETAILS\n`;
        content += `Name: ${plan.userInfo.name}\n`;
        content += `Age: ${plan.userInfo.age}\n`;
        content += `Gender: ${plan.userInfo.genderName}\n`;
        content += `Height: ${plan.userInfo.height} cm\n`;
        content += `Weight: ${plan.userInfo.weight} kg\n`;
        content += `Goal: ${plan.userInfo.goalName}\n\n`;
        
        content += `HEALTH METRICS\n`;
        content += `BMI: ${plan.metrics.bmi} (${plan.metrics.bmiCategory})\n`;
        content += `BMR: ${plan.metrics.bmr} calories/day\n`;
        content += `Daily Calories: ${plan.metrics.dailyCalories} calories/day\n\n`;
        
        content += `7-DAY WORKOUT PLAN\n`;
        for (let day = 1; day <= 7; day++) {
            const dayKey = `Day ${day}`;
            if (plan.workoutPlan[dayKey]) {
                content += `${dayKey}:\n`;
                content += `${plan.workoutPlan[dayKey]}\n\n`;
            }
        }
        
        content += `7-DAY DIET PLAN\n`;
        for (let day = 1; day <= 7; day++) {
            const dayKey = `Day ${day}`;
            if (plan.dietPlan[dayKey]) {
                content += `${dayKey}:\n`;
                content += `  Breakfast: ${plan.dietPlan[dayKey].Breakfast}\n`;
                content += `  Lunch: ${plan.dietPlan[dayKey].Lunch}\n`;
                content += `  Dinner: ${plan.dietPlan[dayKey].Dinner}\n`;
                content += `  Snack: ${plan.dietPlan[dayKey].Snack}\n\n`;
            }
        }
        
        const blob = new Blob([content], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `health_plan_${plan.userInfo.name.replace(/\s+/g, '_').toLowerCase()}.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }
    
    printPlan() {
        const planContainer = document.querySelector('.plan-summary');
        if (!planContainer) {
            alert('No plan to print');
            return;
        }
        
        const printWindow = window.open('', '_blank');
        printWindow.document.write(`
            <html>
                <head>
                    <title>Health Plan - ${this.userData?.name || 'User'}</title>
                    <style>
                        body { font-family: Arial, sans-serif; margin: 20px; }
                        h1 { color: #2cb45d; }
                        .section { margin-bottom: 30px; }
                        table { width: 100%; border-collapse: collapse; }
                        th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
                        th { background-color: #f2f2f2; }
                        .note { font-style: italic; color: #666; }
                    </style>
                </head>
                <body>
                    ${planContainer.innerHTML}
                </body>
            </html>
        `);
        printWindow.document.close();
        printWindow.print();
    }
    
    handleSignIn() {
        const username = document.querySelector('input[type="text"]').value;
        const password = document.querySelector('input[type="password"]').value;
        
        if (!username || !password) {
            alert('Please enter both username and password');
            return;
        }
        
        if (username.length < 3) {
            alert('Username must be at least 3 characters long');
            return;
        }
        
        if (password.length < 6) {
            alert('Password must be at least 6 characters long');
            return;
        }
        
        localStorage.setItem('userLoggedIn', 'true');
        localStorage.setItem('username', username);
        
        window.location.href = 'planner.html';
    }
    
    saveToHistory(data) {
        let history = JSON.parse(localStorage.getItem('bmiHistory') || '[]');
        history.push(data);
        if (history.length > 10) history = history.slice(-10);
        localStorage.setItem('bmiHistory', JSON.stringify(history));
    }
    
    loadHistory() {
        const history = JSON.parse(localStorage.getItem('bmiHistory') || '[]');
        if (history.length === 0) return;
        
        const historyContainer = document.getElementById('bmiHistory');
        if (historyContainer) {
            let html = '<h3>Recent BMI Calculations</h3><ul>';
            history.reverse().forEach(record => {
                html += `
                    <li>
                        ${record.date}: Height ${record.height}cm, Weight ${record.weight}kg
                        → BMI: ${record.bmi} (${record.category})
                    </li>
                `;
            });
            html += '</ul>';
            historyContainer.innerHTML = html;
        }
    }
}

// ============================================================================
// INITIALIZE APPLICATION
// ============================================================================

let healthPlanner;

document.addEventListener('DOMContentLoaded', function() {
    healthPlanner = new HealthPlanner();
    
    const isLoggedIn = localStorage.getItem('userLoggedIn');
    if (isLoggedIn && window.location.pathname.includes('signin.html')) {
        window.location.href = 'planner.html';
    }
    
    if (document.getElementById('bmiHistory')) {
        healthPlanner.loadHistory();
    }
    
    const savedData = localStorage.getItem('userHealthData');
    if (savedData) {
        const data = JSON.parse(savedData);
        Object.keys(data).forEach(key => {
            const element = document.getElementById(key);
            if (element) element.value = data[key];
        });
    }
});