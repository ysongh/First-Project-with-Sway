contract;

use std::{
    storage::StorageMap,
    auth::msg_sender,
};

struct Point {
    id: u64,
    val: u64,
}

storage {
    counter: u64 = 0,
    countLen: u64 = 0,
    points: StorageMap<u64, Point> = StorageMap {},
    pointsMade: StorageMap<Identity, u64> = StorageMap {},
}

abi Counter {
    #[storage(read, write)]
    fn increment();

    #[storage(read, write)]
    fn decrement();

    #[storage(read)]
    fn count() -> u64;

    #[storage(read)]
    fn count_length() -> u64;

    #[storage(read)]
    fn get_from_storage_map(index: u64) -> Point;

    #[storage(read, write)]
    fn insert_into_storage_map();
    
    #[storage(read)]
    fn get_points_by_address() -> u64;
}

impl Counter for Contract {
    #[storage(read)]
    fn count() -> u64 {
        storage.counter
    }

    #[storage(read)]
    fn count_length() -> u64 {
        storage.countLen
    }

    #[storage(read, write)]
    fn increment() {
        storage.counter = storage.counter + 1;
    }

    #[storage(read, write)]
    fn decrement() {
        storage.counter = storage.counter - 1;
    }

    #[storage(read)]
    fn get_from_storage_map(index: u64) -> Point {
        let data = storage.points.get(index).unwrap();
        return data;
    }

    #[storage(read, write)]
    fn insert_into_storage_map() {
        let new_point = Point{id: storage.countLen, val: storage.counter};
        storage.points.insert(storage.countLen, new_point);
        storage.pointsMade.insert(msg_sender().unwrap(), storage.counter);
        storage.countLen = storage.countLen + 1;
    }

    #[storage(read)]
    fn get_points_by_address() -> u64 {
        storage.pointsMade.get(msg_sender().unwrap()).unwrap()
    }
}
