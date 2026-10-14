import asyncio

# 1. 'async def' defines a Coroutine Function
async def bake_pizza():
    print("🍕 Pizza bake hone dala... (Timer started)")
    
    # 2. 'await' pauses this coroutine & gives control back to event loop
    await asyncio.sleep(10) 
    
    print("✅ Pizza tayar hai!")
    return "Delicious Pizza"

async def pour_drink():
    print("🥤 Cold drink pour kar rahe hain...")
    await asyncio.sleep(15)
    print("✅ Cold drink tayar hai!")
    return "Chilled Coke"

# 3. Main runner coroutine
async def main():
    print("👨‍🍳 Chef ne kaam shuru kiya...")
    
    # Run both tasks concurrently (saath-saath)
    results = await asyncio.gather(
        bake_pizza(),
        pour_drink()
    )
    
    print(f"🎉 Serving: {results}")


asyncio.run(main())