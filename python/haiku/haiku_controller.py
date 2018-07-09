import sys;
import haiku_checker;


def validate(string_to_test):
    valid = haiku_checker.check_string(string_to_test)
    print(valid)
    sys.stdout.flush()
    return valid


def validate_sys():
    entry = sys.argv[1]
    print(entry)
    return validate(entry)


def main():
    validate('As the wind does blow Across the trees, I see the Buds blooming in May')


if __name__ == "__main__":
    validate_sys()
